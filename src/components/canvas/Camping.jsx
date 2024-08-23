import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Camp = () => {
  const data = useGLTF(
    "./space_ame_camping_-_amelia_watson_hololive/scene.gltf"
  );
  const { scene, animations } = useGLTF(
    "./space_ame_camping_-_amelia_watson_hololive/scene.gltf"
  );
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    if (actions) {
      const action = actions["Animation"];
      action.reset().play(); // Ensure the animation plays
      action.setLoop(THREE.LoopRepeat, Infinity);
      // actions['Animation'].paused = true
      // console.log({ actions, data });
    }
  }, [actions]);

  return (
    <mesh scale={[2, 2, 2]}>
      <hemisphereLight intensity={2} groundColor="orange" />

      <ambientLight intensity={3} />
      <pointLight intensity={90} position={[0.5, 0.1, 0.5]} color="orange" />
      <primitive
        object={scene}
        position={[0.5, -0.5, -0.5]}
        rotation={[-0.1, 0, -0.1]}
      />
    </mesh>
  );
};

const CampCanvas = () => {
  return (
    <Canvas shadows frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Camp />
      </Suspense>
    </Canvas>
  );
};
export default CampCanvas;
