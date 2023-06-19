import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/path/to/model.glb')

  return <primitive object={gltf.scene} scale={3} dispose={null} />
}

const Loading = () => (
  <Html center>
    <Loader />
  </Html>
);

const App = () => (
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
    <Canvas style={{ background: 'transparent' }} camera={{ position: [0, 0, 15], fov: 75 }}>
      <Suspense fallback={<Loading />}>
        <OrbitControls />
        <Model />
      </Suspense>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  </div>
);

export default App;
