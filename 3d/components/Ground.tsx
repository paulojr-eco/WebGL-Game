import { useGLTF } from '@react-three/drei';

const Ground = () => {
  const ground = useGLTF('./models/Ground.gltf');

  return (
    <mesh position={[0, -1, 0]} receiveShadow>
      <primitive object={ground.scene} />
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} receiveShadow>
        <planeBufferGeometry args={[200, 200, 1, 1]} />
        <shadowMaterial transparent opacity={0.75} />
        <meshStandardMaterial color={'#458745'} />
      </mesh>
    </mesh>
  );
};

useGLTF.preload('./models/Ground.gltf');

export default Ground;
