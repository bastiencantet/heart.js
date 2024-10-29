"use client"

import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export function HeartModel() {
    const gltf = useLoader(GLTFLoader, 'heart.gltf');
    const heartRef = useRef<THREE.Group>();

    useFrame((state, delta) => {
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.1; // Adjust speed (5) and intensity (0.1)
        if (heartRef.current !== undefined) {
            heartRef.current.rotation.y += 0.01;
            heartRef.current.scale.set(scale, scale, scale);
        }
    });
    return <primitive ref={heartRef} object={gltf.scene} scale={1.3} />;
}
