'use client';

import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import Sky from "./components/Sky";
import Player from "./components/Player";

const App = () => {
  const testing = true;

  return (
    <Canvas shadows camera={{ position: [-6, 7, 10], fov: 50 }}>
      {testing ? <Stats /> : null}
      {testing ? <axesHelper args={[5]} /> : null}
      {testing ? <gridHelper args={[100, 100]} /> : null}
      <Sky />
      <group position={[0, -1, 0]}>
        <Player />
      </group>
      <Ground />
    </Canvas>
  );
};

export default App;
