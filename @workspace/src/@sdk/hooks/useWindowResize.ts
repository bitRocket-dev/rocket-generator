/** @format */

import { useState, useEffect } from 'react';

export const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const setNewSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', setNewSize);
    return () => {
      window.removeEventListener('resize', setNewSize);
    };
  }, []);

  return [width, height];
};
