import { useState, useEffect } from 'react';
import { Game, Types } from 'phaser';

export function useGame(
  config: Types.Core.GameConfig,
  containerRef: React.RefObject<HTMLDivElement>
): Game | undefined {
  const [game, setGame] = useState<Game>();
  useEffect(() => {
    if (!game && containerRef.current) {
      import('phaser').then(({ Game }) => {
        const newGame = new Game({ ...config, parent: 'game-content' });
        setGame(newGame);
      });
    }
    return () => {
      game?.destroy(true);
    };
  }, [config, containerRef, game]);

  return game;
}
