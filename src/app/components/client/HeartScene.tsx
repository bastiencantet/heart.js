"use client"

import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { GLTFLoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function HeartModel() {
    const gltf = useLoader(GLTFLoader, 'heart.gltf'); // Replace with your model's path
    const heartRef = useRef<THREE.Group>();

    useFrame((state, delta) => {
        // Animate the scale to simulate beating

        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.1; // Adjust speed (5) and intensity (0.1)
        if (heartRef.current !== undefined) {
            heartRef.current.rotation.y += 0.01;
            heartRef.current.scale.set(scale, scale, scale);
        }
    });
    return <primitive ref={heartRef} object={gltf.scene} scale={1.3} />;
}

export function SceneComponents() {
    return (
        <>
            <Canvas style={{height: '100vh', width: '100vw'}}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[10, 10, 5]} intensity={1}/>
                <pointLight position={[-10, -10, -10]} intensity={3} color="green"/>
                <HeartModel/>
                <OrbitControls/>
                <Environment preset="sunset"/>
            </Canvas>
        </>
    );
}
