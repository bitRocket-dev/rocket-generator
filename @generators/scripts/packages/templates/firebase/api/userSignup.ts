/** @format */

import { firebase } from '../config';

export const apiUserSignup = ({ email, password }: { email: string; password: string }): void => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
