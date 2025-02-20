"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  } from "@react-three/drei";
import RoomModel from "../Room/RoomModel";
import CanvasLoader from "../CanvasLoader/CanvasLoader";

const HeroSection = () => {
  return (
    <div className="w-full h-screen"  style={{ width: "100vw", height: "80vh" }}> 
      <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <Suspense fallback={<CanvasLoader />}>
          {/* Auto-fitting the model inside the view */}
            <RoomModel />


          {/* Controls for user interaction */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

          {/* Lighting for better visibility */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 5, 2]} intensity={1} castShadow />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroSection;
