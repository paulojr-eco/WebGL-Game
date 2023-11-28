'use client';

import { Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from '../../../3d/components/Ground';
import Sky from '../../../3d/components/Sky';
import Player from '../../../3d/components/Player';
import { Physics } from '@react-three/rapier';
import Pipe from '../../../3d/components/Pipe';
import Arrow from '../../../3d/components/Arrow';
import { Suspense } from 'react';

function Game3D() {
  const testing = false;

  return (
    <Canvas shadows camera={{ position: [-20, 70, 180], fov: 60 }}>
      {testing ? <Stats /> : null}
      {testing ? <axesHelper args={[5]} /> : null}
      {testing ? <gridHelper args={[200, 200]} /> : null}
      <Suspense>
        <Sky />
        <Physics>
          <Player />
          <Arrow />
          <Pipe />
          <Ground />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default Game3D;
