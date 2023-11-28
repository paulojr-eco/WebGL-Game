'use client';

import { Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from '../../../3d/components/Ground';
import Sky from '../../../3d/components/Sky';
import Player from '../../../3d/components/Player';
import { Physics } from '@react-three/rapier';
import Pipe from '../../../3d/components/Pipe';
import Arrow from '../../../3d/components/Arrow';
import { Suspense, useState } from 'react';
import Image from 'next/image';

function Game3D() {
  const testing = false;
  const [openUIHistory, setOpenUIHistory] = useState(true);

  return (
    <>
      {openUIHistory && (
        <div className='h-full w-full bg-blue rounded-2xl p-2 absolute z-50'>
          <div className='h-full w-full bg-uiBackground rounded-xl flex flex-col justify-center items-center text-black text-[18px] gap-y-6'>
            <p className='bg-orange-500 rounded-2xl font-bold text-2xl p-4 text-white'>
              Você precisa salvar Luigi!
            </p>
            Luigi entrou em batalha com Bowser e acabou sendo sequestrado.
            <Image
              src={'/images/luigi-vs-bowser.png'}
              alt='Luigi vs Bowser'
              height={400}
              width={400}
            />
            Encontre o cano mais próximo para partir em missão de salvar Luigi.
            <button
              className='bg-blue font-bold p-4 rounded-2xl text-white'
              onClick={() => {
                setOpenUIHistory(false);
              }}
            >
              Iniciar
            </button>
          </div>
        </div>
      )}

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
    </>
  );
}

export default Game3D;
