import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Object3D, Object3DEventMap } from 'three';

const Arrow = () => {
  const modelRef = useRef();
  const model = useGLTF('./models/Arrow.gltf');
  let isUp = true;

  model.scene.traverse((object: Object3D<Object3DEventMap>) => {
    const isMesh: boolean = (object as any).isMesh;
    if (isMesh) {
      object.castShadow = true;
    }
  });

  useFrame(() => {
    if (isUp) {
      model.scene.position.y += 0.05;
      if (model.scene.position.y >= 5) {
        isUp = false;
      }
    } else {
      model.scene.position.y -= 0.05;
      if (model.scene.position.y <= 0) {
        isUp = true;
      }
    }
  });

  return (
    <mesh position={[400, 80, -300]} receiveShadow scale={10}>
      <mesh>
        <primitive object={model.scene} ref={modelRef} />
      </mesh>
    </mesh>
  );
};

useGLTF.preload('./models/Arrow.gltf');

export default Arrow;
