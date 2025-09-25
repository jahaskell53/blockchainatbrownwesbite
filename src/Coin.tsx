import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from "@react-three/drei";
import { ThreeElements, useFrame } from 'react-three-fiber';

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'https://blockchainatbrown.netlify.app/coin.glb');
  const mesh = useRef<ThreeElements["primitive"]>()

  useFrame((state, delta) => (mesh.current!.rotation.y += delta * 0.1))

  return <primitive ref={mesh} object={gltf.scene} dispose={null} scale={[12, 12, 12]} rotation={[0, Math.PI, 0]} />
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
  <Canvas className='bg-transparent h-208' camera={{ position: [-10, 0, 10] }}>
    <Suspense fallback={<Loading />}>
      <OrbitControls 
        minDistance={10}
        maxDistance={20}
      />
      {/* <AxesHelper /> */}
      <Model />
    </Suspense>
    <ambientLight />
    <pointLight position={[-10, 10, 10]} intensity={6} decay={2}/>
  </Canvas>
);

export default App;
