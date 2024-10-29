"use client"

import {Canvas} from "@react-three/fiber";
import {Environment, TrackballControls} from "@react-three/drei";
import React from "react";
import {HeartModel} from "@/app/components/client/heart/HeartModel";


export default function SceneComponents() {
    return (
        <>
            <Canvas style={{height: '100vh', width: '100vw'}}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[10, 10, 5]} intensity={1}/>
                <pointLight position={[-10, -10, -10]} intensity={3} color="green"/>
                <HeartModel/>
                <TrackballControls
                    dynamicDampingFactor={0.04}
                />
                <Environment preset="sunset"/>
            </Canvas>
        </>
    );
}
