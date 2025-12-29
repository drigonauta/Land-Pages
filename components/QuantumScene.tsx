/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Fix: Alias intrinsic Three.js elements to bypass JSX.IntrinsicElements type missing in some environments
const Group = 'group' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

const AbstractMind = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.2;
      ref.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        speed={1.5}
        distort={0.3}
        radius={1}
        metalness={0.2}
        roughness={0.8}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
};

const ThinkingRings = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
       ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Group ref={ref}>
       <Torus args={[2.5, 0.01, 16, 100]} rotation={[Math.PI/2, 0.2, 0]}>
          <MeshBasicMaterial color="#E2E8F0" transparent opacity={0.3} />
       </Torus>
       <Torus args={[2.8, 0.005, 16, 100]} rotation={[Math.PI/2, -0.1, 0]}>
          <MeshBasicMaterial color="#E2E8F0" transparent opacity={0.2} />
       </Torus>
    </Group>
  );
}

export const LucidHeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <AmbientLight intensity={1.5} />
        <PointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <AbstractMind position={[0, 0, 0]} color="#2C3E50" scale={1.5} />
          <ThinkingRings />
        </Float>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export const PerspectiveOrbScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 bg-stone-50/50">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <AmbientLight intensity={0.5} />
        <PointLight position={[5, 5, 5]} color="#A67C52" intensity={2} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           <Sphere args={[1, 64, 64]}>
              <MeshStandardMaterial 
                color="#FDFCFB" 
                roughness={0} 
                metalness={0.1} 
                envMapIntensity={1}
              />
           </Sphere>
           <Torus args={[1.4, 0.02, 16, 100]} rotation={[Math.PI/2.5, 0, 0]}>
               <MeshStandardMaterial color="#A67C52" metalness={1} roughness={0} />
           </Torus>
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}