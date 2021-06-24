/** @format */

import { useState, useEffect } from 'react';

export const useLocation = (): [{ lat: number; lng: number } | null, string] => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      // @ts-ignore
      pos => setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => setErrors(err.message),
    );
  }, []);

  return [position, errors];
};
