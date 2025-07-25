import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf');

  return (
    <primitive object={scene} scale={2.5} position-y={0}  />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer : true}}
      camera={{
        fov : 45,
        near : 0.1,
        position : [-4, 3, 6]
      }}>
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}/>
          <Earth />
        </Suspense>
    </Canvas>
  )
}
export default EarthCanvas;