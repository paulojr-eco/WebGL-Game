'use client';

import React, { useRef } from 'react';

import { useGame } from '../../../2d/hooks';
import gameConfig from '../../../2d/game';

function Game2D() {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className='container flex flex-col items-center flex-1 justify-center'>
      <div ref={parentEl} className='game-content' />
    </div>
  );
}

export default Game2D;
