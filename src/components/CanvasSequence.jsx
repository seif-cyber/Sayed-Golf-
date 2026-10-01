import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 100;
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const getFramePath = (index) =>
  `${BASE}frames/frame_${String(index + 1).padStart(4, '0')}.webp`;

const smoothstep = (t) => t * t * (3 - 2 * t);
const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
const lerp = (a, b, t) => a + (b - a) * t;

export default function CanvasSequence() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation state ref for buttery smooth 60fps interpolation
  const stateRef = useRef({
    cx: 0,
    cy: 0,
    width: 0,
    frame: 0,
    initialized: false,
  });

  // Preload all 100 frames
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        console.warn(`Could not load frame: ${getFramePath(i)}`);
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Main render & tracking loop
  useEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Slots in each section
      const slot1 = document.getElementById('car-slot-1');
      const slot2 = document.getElementById('car-slot-2');
      const slot3 = document.getElementById('car-slot-3');
      const slot4 = document.getElementById('car-slot-4');

      const featuresSection = document.getElementById('features');
      const showcaseSection = document.getElementById('showcase');
      const gallerySection = document.getElementById('gallery');
      const finaleSection = document.getElementById('finale');

      // Progress calculations between sections
      const calcProgress = (el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        return clamp((vh - rect.top) / (vh * 0.85), 0, 1);
      };

      const p1 = smoothstep(calcProgress(featuresSection));
      const p2 = smoothstep(calcProgress(showcaseSection));
      const pGallery = smoothstep(calcProgress(gallerySection));
      const p3 = smoothstep(calcProgress(finaleSection));

      // Calculate target screen position and width by blending slot rects
      let targetX = vw / 2;
      let targetY = vh / 2;
      const isMobile = vw < 768;
      
      const r1 = slot1?.getBoundingClientRect();
      const r2 = slot2?.getBoundingClientRect();
      const r3 = slot3?.getBoundingClientRect();
      const r4 = slot4?.getBoundingClientRect();

      let targetW = r1 ? r1.width : Math.min(vw * 0.55, 780);

      if (r1) {
        targetX = r1.left + r1.width / 2;
        targetY = r1.top + r1.height / 2;
        targetW = r1.width;
      }

      // Smoothly pull car towards screen center (vh * 0.5) as soon as user starts scrolling
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        const centerFactor = clamp(scrollY / (vh * 0.35), 0, 1);
        targetY = lerp(targetY, vh * 0.5, centerFactor);
      }

      if (r2 && p1 > 0) {
        const s2x = r2.left + r2.width / 2;
        targetX = lerp(targetX, s2x, p1);
        // Keep car perfectly centered vertically in features section so roof view is never cut off
        targetY = lerp(targetY, vh * 0.5, p1);
        const roofScale = isMobile ? 2.4 : 2.5; 
        targetW = lerp(targetW, r2.width * roofScale, p1);
      }

      if (r3 && p2 > 0) {
        const s3x = r3.left + r3.width / 2;
        targetX = lerp(targetX, s3x, p2);
        targetY = lerp(targetY, vh * 0.5, p2);
        const sideScale = isMobile ? 1.3 : 1.4;
        targetW = lerp(targetW, r3.width * sideScale, p2);
      }

      if (r4 && p3 > 0) {
        const s4x = r4.left + r4.width / 2;
        const s4y = r4.top + r4.height / 2;
        targetX = lerp(targetX, s4x, p3);
        targetY = lerp(targetY, s4y, p3);
        const frontScale = isMobile ? 1.4 : 1.6;
        targetW = lerp(targetW, r4.width * frontScale, p3);
      }

      // Never let the car sink off the bottom edge during scroll transitions
      if (scrollY > 15 && p3 < 0.6) {
        targetY = clamp(targetY, vh * 0.35, vh * 0.52);
      }

      // Calculate rotation frame based on overall scroll
      const maxScroll = document.documentElement.scrollHeight - vh;
      const scrollRatio = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;
      const targetFrame = scrollRatio * (TOTAL_FRAMES - 1);

      // Smooth interpolation (lerp) for liquid 60fps tracking
      const st = stateRef.current;
      if (!st.initialized) {
        st.cx = targetX;
        st.cy = targetY;
        st.width = targetW;
        st.frame = targetFrame;
        st.initialized = true;
      } else {
        const speed = 0.16;
        st.cx += (targetX - st.cx) * speed;
        st.cy += (targetY - st.cy) * speed;
        st.width += (targetW - st.width) * speed;
        st.frame += (targetFrame - st.frame) * speed;
      }

      // Draw onto canvas
      const frameIdx = Math.round(clamp(st.frame, 0, TOTAL_FRAMES - 1));
      const img = imagesRef.current[frameIdx];

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (img && img.complete && img.naturalWidth > 0) {
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const drawW = st.width * dpr;
        const drawH = drawW / imgRatio;

        const drawX = st.cx * dpr - drawW / 2;
        const drawY = st.cy * dpr - drawH / 2;

        let carAlpha = 1;
        if (pGallery > 0.05 && p3 < 0.8) {
          if (p3 > 0.15) {
            // Fading back in for finale
            carAlpha = clamp((p3 - 0.15) / 0.5, 0, 1);
          } else {
            // Fading out as user enters gallery
            carAlpha = clamp(1 - (pGallery - 0.05) / 0.35, 0, 1);
          }
        }

        ctx.globalAlpha = carAlpha;
        if (carAlpha > 0.01) {
          ctx.drawImage(img, drawX, drawY, drawW, drawH);
        }
        ctx.globalAlpha = 1.0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#070404] transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-5 p-8 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl text-center max-w-sm mx-4">
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-[#ff3535] animate-spin shadow-lg shadow-[#ff3535]/40" />
            <div className="absolute text-xs font-black text-white font-mono">
              {loadingProgress}%
            </div>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-white tracking-wide font-cairo uppercase">
              SAYED GOLF
            </h3>
            <p className="text-xs text-[#9aa0a8] font-medium font-cairo">
              جاري تجهيز التجربة...
            </p>
          </div>
          <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#ff3535] to-red-400 transition-all duration-150 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Fixed Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-10 pointer-events-none w-full h-full"
      />
    </>
  );
}
