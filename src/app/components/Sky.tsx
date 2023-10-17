import { OrbitControls } from "@react-three/drei";

const Sky = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <color attach='background' args={['skyblue']} />
    </>
  );
};

export default Sky;
