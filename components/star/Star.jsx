// components/Star.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  MeshStandardMaterial,
  Shape,          // <--- Confirm this import
  ExtrudeGeometry // <--- Confirm this import
} from 'three';

// Helper function to create a 2D star shape
const createStarShape = (outerRadius, innerRadius, points) => {
  const shape = new Shape();

  // Angle adjustment to make the star point upwards
  const rotationOffset = -Math.PI / 2;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i / (points * 2)) * Math.PI * 2 + rotationOffset;

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath(); // Ensure the shape is closed
  return shape;
};

export default function Star({ position, scale = 1 }) { // Added scale prop for easier resizing
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const yellowMaterial = new MeshStandardMaterial({
    color: '#FFD700', // Gold-like yellow
    roughness: 0.0,
    metalness: 0.3,
    emissive: '#FFA500',
    emissiveIntensity: 0.1
  });

  // --- Crucial part for the star shape ---
  const outerRadius = 0.6; // Controls the overall size of the star (adjust as needed)
  const innerRadius = 0.2; // Controls the depth of the inner points
  const numPoints = 5;     // Number of points on the star

  // Create the 2D star shape
  const star2DShape = createStarShape(outerRadius, innerRadius, numPoints);

  // Create 3D geometry by extruding the 2D shape
  // Depth gives it thickness, bevel makes edges smoother
  const star3DGeometry = new ExtrudeGeometry(star2DShape, {
    depth: 0.0, // Thickness of the star (adjust for more/less 3D feel)
    bevelEnabled: true,
    bevelSegments: 40, // More segments for smoother bevels
    steps: 1,
    bevelSize: 0.05,  // Size of the bevel
    bevelThickness: 0.05 // Thickness of the bevel
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      geometry={star3DGeometry} // <--- Ensure this is correctly assigned
      material={yellowMaterial}
      scale={scale} // Apply the scale prop
    />
  );
}