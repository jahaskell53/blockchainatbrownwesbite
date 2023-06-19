import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'https://blockchainatbrown.com/coin.glb')

  return <primitive object={gltf.scene} dispose={null} scale={[18, 18, 18]} rotation={[0, Math.PI, 0]} />
}

const Loading = () => (
  <Html center>
    <Loader />
  </Html>
);

const App = () => (
  <Canvas className='bg-transparent h-96' camera={{ position: [0, 0, 10] }}>
    <Suspense fallback={<Loading />}>
      <OrbitControls />
      <Model />
    </Suspense>
    <ambientLight />
    <pointLight position={[10, 10, 10]} intensity={8} color="#0819b2" decay={1}/>
  </Canvas>
);

export default App;
