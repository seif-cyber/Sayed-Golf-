import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.DEV ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
const MODEL_PATH = `${BASE}/models/porsche.glb`;
const ENV_PATH = `${BASE}/models/city.hdr`;

// Elegant Loading Spinner for 3D Assets
function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-black/85 backdrop-blur-lg border border-white/10 text-center select-none shadow-2xl min-w-[180px]">
        <div className="w-10 h-10 border-3 border-vw-red border-t-transparent rounded-full animate-spin shadow-lg shadow-vw-red/40" />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-black text-white font-sans tracking-wider">
            {Math.round(progress)}%
          </span>
          <span className="text-xs font-medium text-gray-300">
            جاري تجهيز المجسم...
          </span>
        </div>
      </div>
    </Html>
  );
}

// Dynamic responsive camera handler
function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    const isMobile = size.width < 768;
    camera.position.z = isMobile ? 6.5 : 4.3;
    camera.position.y = isMobile ? 0.8 : 1.15;
    camera.updateProjectionMatrix();
  }, [size.width, size.height, camera]);
  return null;
}

// 3D Car Model Component
function CarModel() {
  const modelRef = useRef();
  // Load the GLB model using dynamic base URL
  const { scene } = useGLTF(MODEL_PATH);

  // Apply high-end automotive materials to the model
  React.useMemo(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const name = (child.name || '').toLowerCase();
        if (name.includes('body')) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#E50000'), // Signature VW/Porsche Racing Red
            metalness: 0.85,
            roughness: 0.15,
            clearcoat: 1.0,
            clearcoatRoughness: 0.04,
            reflectivity: 0.9,
          });
        } else if (name.includes('glass')) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#ffffff'),
            metalness: 0.1,
            roughness: 0.05,
            transmission: 0.9,
            transparent: true,
            opacity: 0.55,
          });
        } else if (name.includes('rim') || name.includes('wheel') || name.includes('trim') || name.includes('tire')) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#1f1f1f'),
            metalness: 0.85,
            roughness: 0.3,
          });
        } else if (!child.material || (child.material.color && child.material.color.getHex() === 0)) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#2a2a2a'),
            metalness: 0.6,
            roughness: 0.4,
          });
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!modelRef.current) return;

    const car = modelRef.current;
    car.position.set(0, -0.65, 0);
    car.rotation.set(0, Math.PI * 0.25, 0); // initial 45 degree angle

    // ScrollTrigger timeline for 3D scrollytelling
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scrolly-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      // Section 1 -> 2 (Hero to About Us): Car rotates to side profile, shifts left (RTL friendly)
      tl.to(car.rotation, {
        y: Math.PI * 0.75,
        x: 0.05,
        z: -0.02,
        duration: 2,
        ease: 'power2.inOut',
      }, 0)
      .to(car.position, {
        x: -1.2,
        y: -0.55,
        z: -0.4,
        duration: 2,
        ease: 'power2.inOut',
      }, 0)
      .to(car.scale, {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 2,
      }, 0);

      // Section 2 -> 3 (About to Services): Car rotates to 3/4 rear/dynamic angle, centers slightly
      tl.to(car.rotation, {
        y: Math.PI * 1.35,
        x: -0.05,
        z: 0.02,
        duration: 2,
        ease: 'power2.inOut',
      }, 2)
      .to(car.position, {
        x: 1.1,
        y: -0.6,
        z: -0.2,
        duration: 2,
        ease: 'power2.inOut',
      }, 2);

      // Section 3 -> 4 (Services to Brands): 360 showroom spin, lifted slightly
      tl.to(car.rotation, {
        y: Math.PI * 2.2,
        x: 0.02,
        z: 0,
        duration: 2.5,
        ease: 'power1.inOut',
      }, 4)
      .to(car.position, {
        x: 0,
        y: -0.45,
        z: 0.2,
        duration: 2.5,
      }, 4)
      .to(car.scale, {
        x: 1.18,
        y: 1.18,
        z: 1.18,
        duration: 2.5,
      }, 4);

      // Section 4 -> 5 (Brands to Contact & Footer): Full turn back to authoritative front view
      tl.to(car.rotation, {
        y: Math.PI * 2.85,
        x: 0.08,
        z: 0,
        duration: 2,
        ease: 'power2.inOut',
      }, 6.5)
      .to(car.position, {
        x: 0,
        y: -0.7,
        z: -0.2,
        duration: 2,
      }, 6.5);
    });

    return () => ctx.revert();
  }, [scene]);

  // Subtle floating idle motion
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.0004;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.12}
    />
  );
}

// Preload the model for immediate rendering
useGLTF.preload(MODEL_PATH);

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 1.15, 4.3], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ResponsiveCamera />

        {/* Cinematic Studio Automotive Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[6, 10, 5]}
          intensity={2.4}
          color="#ffffff"
          castShadow
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[-6, 4, -4]}
          intensity={1.8}
          color="#E50000" // Signature Red accent rim light
        />
        <pointLight position={[0, 4, 3]} intensity={1.5} color="#ffffff" />
        <spotLight
          position={[0, 8, 2]}
          intensity={1.8}
          angle={0.7}
          penumbra={0.8}
          color="#ffffff"
        />

        {/* Local Environment Map & Ground Shadow */}
        <Suspense fallback={<CanvasLoader />}>
          <Environment files={ENV_PATH} />
          <CarModel />
          <ContactShadows
            position={[0, -0.75, 0]}
            opacity={0.85}
            scale={12}
            blur={2.4}
            far={4.5}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
