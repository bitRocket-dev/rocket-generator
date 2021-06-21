/** @format */

import { useEffect, useState } from 'react';

export const useOnlineCheck = (): boolean => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  const setNewStatus = (): void => setOnlineStatus(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', setNewStatus);
    window.addEventListener('offline', setNewStatus);
  }, []);

  return onlineStatus;
};
