/** @format */

import { useState, useEffect, FC } from 'react';
import firebaseLib from 'firebase';
import { firebase } from './config';

interface Props {
  children: ({ user }: { user: firebaseLib.User | undefined }) => JSX.Element;
}

export const ProviderFirebase: FC<Props> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<firebaseLib.User>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) setUser(user);
      else setUser(undefined);
    });
  }, []);

  return children({ user });
};
