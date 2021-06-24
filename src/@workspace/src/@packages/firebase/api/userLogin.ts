/** @format */

import { firebase } from '../config';

export const apiUserLogin = ({ email, password }: { email: string; password: string }): void => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
