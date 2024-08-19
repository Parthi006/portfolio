import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Camp = () => {
  const { scene } = useGLTF('./space_ame_camping_-_amelia_watson_hololive/scene.gltf');

  return (
     <mesh scale={[1, 1, 1]}>
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
    <primitive object={scene}  position={[0,-1,0]} rotation={[0 , 20, 0]} /> 
    </mesh>
   
  )
}

const CampCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer : true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            // autoRotate
            // enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}/>
          <Camp />
        </Suspense>
    </Canvas>
  )
}
export default CampCanvas;