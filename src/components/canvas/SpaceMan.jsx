import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Space = () => {
  const { scene } = useGLTF('./space_boi/scene.gltf');

  console.log(scene); // Check the scene object

  return (
    <mesh scale={[0.7, 0.7, 0.7]}>
      <primitive object={scene} position={[0, -3, 0]} rotation={[0, Math.PI / 9, 0]} />
    </mesh>
  );
};

const SpaceCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Space />
      </Suspense>
    </Canvas>
  );
};

export default SpaceCanvas;
