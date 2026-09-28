import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 3D Car Model Component
function CarModel() {
  const modelRef = useRef();
  // Load the GLB model from the public directory
  const { scene } = useGLTF('./models/porsche.glb');

  useEffect(() => {
    if (!modelRef.current) return;

    // Center and adjust initial scale and position
    const car = modelRef.current;
    car.position.set(0, -0.6, 0);
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
        y: -0.5,
        z: -0.5,
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
        y: -0.4,
        z: 0.2,
        duration: 2.5,
      }, 4)
      .to(car.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
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
      scale={1.15}
    />
  );
}

// Preload the model for immediate rendering
useGLTF.preload('./models/porsche.glb');

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 1.2, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic Ambient and Directional Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 8, 4]}
          intensity={2.2}
          color="#ffffff"
          castShadow
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[-6, 4, -3]}
          intensity={1.5}
          color="#E50000" // Red ambient rim light reflecting VW/Porsche theme
        />
        <pointLight position={[0, 3, 2]} intensity={1.2} color="#ffffff" />
        <spotLight
          position={[0, 6, 0]}
          intensity={1.8}
          angle={0.6}
          penumbra={0.8}
          color="#ffffff"
        />

        {/* Environment preset for hyper-realistic metallic reflections */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          <CarModel />
          <ContactShadows
            position={[0, -0.68, 0]}
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
