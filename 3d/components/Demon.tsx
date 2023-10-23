import React, {  } from 'react';
import {
  useGLTF,
} from '@react-three/drei';

const Demon = (props: any) => {
  const model = useGLTF('./models/Demon.gltf');

  return (
    <mesh scale={5} position={[-78, 0, 0]} rotation={[0, 0.5 * Math.PI, 0]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

useGLTF.preload('./models/Demon.gltf');

export default Demon;
