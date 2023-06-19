import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'https://blockchainatbrown.com/coin.glb')

  return <primitive object={gltf.scene} dispose={null} scale={[14, 14, 14]} rotation={[0, Math.PI + Math.PI / 5, 0]} />
}

const Loading = () => (
  <Html center>
    <Loader />
  </Html>
);

const AxesHelper = () => (
  <axesHelper args={[5]} />
);


const App = () => (
  <Canvas className='bg-transparent h-176' camera={{ position: [0, 0, 10] }}>
    <Suspense fallback={<Loading />}>
      <OrbitControls />
      <AxesHelper />
      <Model />
    </Suspense>
    <ambientLight />
    <pointLight position={[-10, 10, 10]} intensity={8} decay={1}/>
  </Canvas>
);

export default App;
