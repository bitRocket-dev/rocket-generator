/** @format */

import { firebase } from '../config';

export const apiUserLogout = (): void => {
  firebase.auth().signOut();
};
