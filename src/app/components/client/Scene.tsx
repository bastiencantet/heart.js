"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, TrackballControls } from "@react-three/drei";
import React, {Suspense, useEffect, useState} from "react";
import { HeartModel } from "@/app/components/client/heart/HeartModel";
import { isWebGLAvailable } from "three-stdlib";

export default function SceneComponents() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    if (!isWebGLAvailable()) {
        return (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h1 style={{ color: 'lightgrey', fontSize: '2em', opacity: '0.8' }}>
                    WebGL is not available on your browser
                </h1>
            </div>
        );
    }

    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={3} color="green" />
            <Suspense fallback={null}>
                <HeartModel />
            </Suspense>
            <TrackballControls dynamicDampingFactor={0.04} />
            <Environment preset="sunset" />
        </Canvas>
    );
}
