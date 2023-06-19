import React, { useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera, SoftShadows } from '@react-three/drei';
import * as THREE from 'three';

const Coin = () => {
  const sceneRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      'https://blockchainatbrown.com/coin.glb', // Replace with the path to your custom 3D model file
      (gltf) => {
        const object = gltf.scene;
        object.position.set(0, 0, 0);
        sceneRef.current?.add(object);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
    >
      <scene ref={sceneRef} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 10]} intensity={0.5} castShadow />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default Coin;
