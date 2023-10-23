'use client';

import { Box, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from '../../../3d/components/Ground';
import Sky from '../../../3d/components/Sky';
import Player from '../../../3d/components/Player';
import Demon from '../../../3d/components/Demon';
import { Physics, RigidBody } from '@react-three/rapier';

function Game3D() {
  const testing = false;

  return (
    <Canvas shadows camera={{ position: [-6, 7, 10], fov: 50 }}>
      {testing ? <Stats /> : null}
      {testing ? <axesHelper args={[5]} /> : null}
      {testing ? <gridHelper args={[200, 200]} /> : null}
      <Sky />
      <Physics debug>
        <group position={[0, -1, 0]}>
          <Player />
        </group>
      </Physics>
      <Demon />
      <Physics debug>
        <Ground />
      </Physics>
    </Canvas>
  );
};

export default Game3D;
