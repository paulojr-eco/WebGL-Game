const Ground = () => {
  return (
    <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeBufferGeometry args={[100, 100, 1, 1]} />
      <shadowMaterial transparent opacity={0.75} />
      <meshStandardMaterial color={'#458745'} />
    </mesh>
  );
};

export default Ground;
