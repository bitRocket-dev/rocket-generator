/** @format */

import { useState, useEffect } from 'react';

export const useMousePosition = (): [number, number] => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    setPositionX(event.clientX);
    setPositionY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [positionX, positionY];
};
