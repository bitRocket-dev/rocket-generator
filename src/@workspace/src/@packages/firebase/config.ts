/** @format */

import firebaseLib from 'firebase';
import { utilityGetFirebaseConfig } from './helpers/utilityGetFirebaseConfig';

const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } =
  utilityGetFirebaseConfig();

export const firebase = firebaseLib.initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
});
