'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingElements = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create a star shape geometry (simple 3D star using OctahedronGeometry)
  const starGeometry = new THREE.OctahedronGeometry(0.5);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 2;
        child.rotation.x += 0.01;
        child.rotation.z += 0.01;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Stars */}
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          geometry={starGeometry}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
        >
          <meshStandardMaterial 
            color={new THREE.Color().setHSL(Math.random(), 0.7, 0.8)}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingElements;
