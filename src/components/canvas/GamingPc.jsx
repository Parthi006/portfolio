import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const GamingPc = () => {
  const { scene } = useGLTF('./gaming_desktop_pc_blend_file/scene.gltf');

  return (
    <mesh scale={[0.5, 0.5, 0.5]}>
        <hemisphereLight intensity={6} groundColor="black" />
         <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight
        intensity={1.2}
        position={[10, 10, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={1.5} />
    <primitive object={scene}  position={[0,-4,-2]} rotation={[0 , 2, -0.1]} /> 
    </mesh>
   
  )
}

const GamingPcCanvas = () => {
  return (
    <Canvas 
      shadows={true}
      frameloop='demand'
      gl={{preserveDrawingBuffer : true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}/>
          <GamingPc />
          <Preload all/>
        </Suspense>
    </Canvas>
  )
}
export default GamingPcCanvas;