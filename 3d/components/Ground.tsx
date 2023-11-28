import { Box, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Ground = () => {
  return (
    <>
      <RigidBody type='fixed'>
        <mesh
          position={[0, 0, 0]}
          rotation={[-0.5 * Math.PI, 0, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[1000, 1000, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <Box position={[0, -1, 0]} args={[1000, 1, 1000]}>
        <meshStandardMaterial color={'#458745'} />
      </Box>
    </>
  );
};

export default Ground;
