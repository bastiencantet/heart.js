"use client"

import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function HeartModel() {
  const gltf = useLoader(GLTFLoader, 'heart.gltf'); // Replace with your model's path
    const heartRef = useRef();

    useFrame((state, delta) => {
        // Animate the scale to simulate beating
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.1; // Adjust speed (5) and intensity (0.1)
        if (heartRef.current !== undefined) {
            heartRef.current.scale.set(scale, scale, scale);
        }
    });
  return <primitive ref={heartRef} object={gltf.scene} scale={1.4} />;
}

export default function HeartScene() {
  return (
      <Canvas  style={{ height: '100vh', width: '100vw' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <HeartModel />
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
  );
}
