import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Sky = () => {
  const camera = useThree((state) => state.camera);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <color attach='background' args={['#00b5e2']} />
    </>
  );
};

export default Sky;
