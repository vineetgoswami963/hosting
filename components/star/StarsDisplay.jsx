// components/StarsDisplay.jsx
'use client'; // Required for client-side components in Next.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Star from './Star'; // Ensure correct import path

export default function StarsDisplay() {
  return (
    // The parent div *must* have a defined width and height for the Canvas to render
    <div style={{ width: '100%', height: '200px', backgroundColor: 'transparent' }}>
    
    
      <Canvas
        // Adjust camera position and field of view.
        // A lower Z value brings the camera closer.
        // A higher FOV makes things look more stretched/fisheye but covers more area.
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }} // Ensure canvas background is transparent
      >
        <Suspense fallback={null}> {/* Handles loading states for 3D assets */}
          {/* Lighting for the scene - crucial for 3D visibility */}
          <ambientLight intensity={0.5} /> {/* Soft overall light */}
          <pointLight position={[10, 10, 10]} intensity={1.5} /> {/* Main light source */}
          <pointLight position={[-10, -10, -10]} intensity={0.8} /> {/* Secondary light for depth */}
          <directionalLight position={[0, 5, 5]} intensity={0.5} /> {/* Another light type */}


          {/* Render 4 stars in a horizontal line */}
          {/* Adjust the X-positions to space them out evenly */}


          <Star position={[-7.0, 0, 0]} scale={3.0} /> {/* Added scale to make them smaller/larger */}
          <Star position={[-2.0, 0, 0]} scale={3.0} />
 
          <Star position={[2.2, 0, 0]} scale={3.0} />
          <Star position={[7.5, 0, 0]} scale={3.0} />

          {/* OrbitControls allows you to click, drag, and scroll to move the camera.
              This is incredibly useful for debugging if objects are rendering but
              are off-screen or too small/large. Remember to remove it for final production
              unless you want users to control the camera.
          */}
           {/* <--- Confirm this component is rendered */}
        </Suspense>
      </Canvas>
    </div>
  );
}