'use client';

import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { Object3D, Object3DEventMap } from 'three';

const Pipe = () => {
  const modelRef = useRef();
  const model = useGLTF('./models/Pipe.gltf');

  model.scene.traverse((object: Object3D<Object3DEventMap>) => {
    const isMesh: boolean = (object as any).isMesh;
    if (isMesh) {
      object.castShadow = true;
    }
  });

  return (
    <mesh position={[400, 15, -300]} receiveShadow scale={15}>
      <RigidBody
        type='dynamic'
        onCollisionEnter={(payload) => {
          if (payload.colliderObject?.name === 'player_collider') {
            if (typeof window !== 'undefined') {
              window.location.href = '/game';
            }
          }
        }}
      >
        <mesh>
          <primitive object={model.scene} ref={modelRef} />
        </mesh>
      </RigidBody>
    </mesh>
  );
};

useGLTF.preload('./models/Pipe.gltf');

export default Pipe;
