import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import { FloatingObjects } from './FloatingObjects';
import { AnalyticsVisualization } from './AnalyticsVisualization';

interface Scene3DProps {
  variant?: 'hero' | 'analytics' | 'background';
  interactive?: boolean;
}

export const Scene3D = ({ variant = 'background', interactive = true }: Scene3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          {variant === 'hero' && <FloatingObjects />}
          {variant === 'analytics' && <AnalyticsVisualization />}
          {variant === 'background' && <FloatingObjects count={5} />}
          
          {interactive && <OrbitControls enableZoom={false} enablePan={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
};