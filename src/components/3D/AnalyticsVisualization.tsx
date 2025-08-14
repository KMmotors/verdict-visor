import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Cylinder } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { gsap } from 'gsap';

export const AnalyticsVisualization = () => {
  const groupRef = useRef<Group>(null);
  const barsRef = useRef<Mesh[]>([]);

  const data = [
    { label: 'Positive', value: 0.7, color: 'hsl(var(--success))' },
    { label: 'Neutral', value: 0.2, color: 'hsl(var(--secondary))' },
    { label: 'Negative', value: 0.1, color: 'hsl(var(--destructive))' },
  ];

  useEffect(() => {
    barsRef.current.forEach((bar, index) => {
      if (bar) {
        gsap.fromTo(
          bar.scale,
          { y: 0 },
          { y: data[index].value * 3, duration: 1.5, delay: index * 0.3, ease: "bounce.out" }
        );
      }
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {data.map((item, index) => (
        <group key={index} position={[index * 1.5 - 1.5, 0, 0]}>
          <Cylinder
            ref={(el) => {
              if (el) barsRef.current[index] = el;
            }}
            args={[0.3, 0.3, 1]}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial color={item.color} />
          </Cylinder>
          <Text
            position={[0, -1, 0]}
            fontSize={0.2}
            color="hsl(var(--foreground))"
            anchorX="center"
            anchorY="middle"
          >
            {item.label}
          </Text>
          <Text
            position={[0, 2, 0]}
            fontSize={0.15}
            color="hsl(var(--muted-foreground))"
            anchorX="center"
            anchorY="middle"
          >
            {Math.round(item.value * 100)}%
          </Text>
        </group>
      ))}
    </group>
  );
};