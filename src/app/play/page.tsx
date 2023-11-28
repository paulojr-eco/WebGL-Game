'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useGame } from '../../../2d/hooks';
import gameConfig, { mainScene } from '../../../2d/game';
import comparePaths from '../../../2d/game/utils/comparePaths';
import ResultsUI, { ResultsUIProps } from '@/components/ResultsUI/ResultsUI';

function Game2D() {
  const [shouldReload, setShouldReload] = useState(false);
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (hasVisitedBefore === 'false') {
      setShouldReload(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  useEffect(() => {
    if (shouldReload) {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    }
  }, [shouldReload]);

  const parentEl = useRef<HTMLDivElement>(null);
  const [openUI, setOpenUI] = useState(false);
  const [resultGame, setResultGame] = useState<ResultsUIProps>();
  useGame(gameConfig, parentEl);

  const eventEmitter = mainScene.stopwatch.eventEmitter;
  eventEmitter.on('stopwatchReachedZero', () => {
    setResultGame({
      message: 'Infelizmente seu tempo acabou! Tente mais uma vez.',
      type: 'FAILURE',
      buttonFunction: () => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      },
    });
    setOpenUI(true);
  });

  if (resultGame?.type === 'SUCCESS') {
    eventEmitter.emit('gameSuccess');
  }

  return (
    <div className='container flex flex-col items-center flex-1 justify-center'>
      <div ref={parentEl} className='game-content' />
      <button
        className='absolute right-4 bottom-4 border-2 border-solid p-4 rounded-full bg-greenButton font-bold cursor-pointer hover:bg-greenDark active:bg-greenPressed shadow-2xl'
        onClick={() => {
          setOpenUI(!openUI);
          const result = comparePaths(setOpenUI);
          if (result.buttonFunction === null) {
            result.buttonFunction = () => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            };
          }
          setResultGame(result);
        }}
      >
        GO
      </button>
      {openUI && (
        <ResultsUI
          message={resultGame!.message}
          type={resultGame!.type}
          buttonFunction={resultGame!.buttonFunction}
        />
      )}
    </div>
  );
}

export default Game2D;
