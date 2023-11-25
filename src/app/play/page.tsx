'use client';

import React, { useRef } from 'react';

import { useGame } from '../../../2d/hooks';
import gameConfig from '../../../2d/game';
import comparePaths from '../../../2d/game/utils/comparePaths';

function Game2D() {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className='container flex flex-col items-center flex-1 justify-center'>
      <div ref={parentEl} className='game-content' />
      <div
        className='absolute right-4 bottom-4 border-2 border-solid border-blue-500 p-4 rounded-xl'
        onClick={() => {
          comparePaths();
        }}
      >
        Start
      </div>
    </div>
  );
}

export default Game2D;
