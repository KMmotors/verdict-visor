import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import { Group } from 'three';
import { gsap } from 'gsap';

interface FloatingObjectsProps {
  count?: number;
}

export const FloatingObjects = ({ count = 8 }: FloatingObjectsProps) => {
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(
        groupRef.current.rotation,
        { y: 0 },
        { y: Math.PI * 2, duration: 20, repeat: -1, ease: "none" }
      );
    }
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
        child.rotation.x += 0.01;
        child.rotation.z += 0.005;
      });
    }
  });

  const objects = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const radius = 3 + Math.random() * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 4;

    const ObjectComponent = [Sphere, Box, Torus][i % 3];
    const color = [`hsl(var(--primary))`, `hsl(var(--accent))`, `hsl(var(--secondary))`][i % 3];

    return (
      <ObjectComponent
        key={i}
        position={[x, y, z]}
        scale={0.3 + Math.random() * 0.3}
        args={ObjectComponent === Torus ? [0.5, 0.2, 8, 16] : [0.5]}
      >
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </ObjectComponent>
    );
  });

  return <group ref={groupRef}>{objects}</group>;
};