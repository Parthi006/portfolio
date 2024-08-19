import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const SpaceShuttle = () => {
  const { scene } = useGLTF('./24_dizzying_space_travel_-_inktober2019/scene.gltf');

  return (
    <mesh scale={[0.1, 0.1, 0.1]}>
    <primitive object={scene}  position={[0,0,0]} rotation={[0 , 0, 0]} /> 
    </mesh>
  )
}

const SpaceShuttleCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer : true}}
     >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            // autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}/>
          <SpaceShuttle />
          <Preload all />
        </Suspense>
    </Canvas>
  )
}
export default SpaceShuttleCanvas;