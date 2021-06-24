/** @format */
import { useEffect } from 'react';

export const useNotification = () => {
  const notify = ({ title, body, icon, url }: { title: string; body: string; icon: string; url: string }) => {
    if (Notification.permission !== 'granted') Notification.requestPermission();
    else {
      const notification = new Notification(title, { icon, body });
      notification.onclick = () => window.open(url);
    }
  };

  const handleNotification = () => {
    if (!Notification) alert('Desktop notifications not available in your browser. Try Chromium.');
    else if (Notification.permission !== 'granted') Notification.requestPermission();
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleNotification);
    return () => {
      window.removeEventListener('DOMContentLoaded', handleNotification);
    };
  }, []);

  return [notify];
};
