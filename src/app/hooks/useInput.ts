import { useState } from 'react';
import { useEffect } from 'react';

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    shift: false,
  });

  const keys = {
    KeyW: 'forward',
    ArrowUp: 'forward',
    KeyA: 'left',
    ArrowLeft: 'left',
    KeyS: 'backward',
    ArrowDown: 'backward',
    KeyD: 'right',
    ArrowRight: 'right',
    ShiftLeft: 'shift',
    Space: 'jump',
  };

  const findKey = (key: string) => keys[key];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return input;
};
