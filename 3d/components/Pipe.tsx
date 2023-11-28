import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';

const Pipe = () => {
  const modelRef = useRef();
  const model = useGLTF('./models/Pipe.gltf');

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  return (
    <mesh position={[400, 15, -300]} receiveShadow scale={15}>
      <RigidBody
        type = 'dynamic'
        onCollisionEnter={(payload) => {
          if(payload.colliderObject?.name === 'player_collider') {
            window.location.href = '/game';
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
