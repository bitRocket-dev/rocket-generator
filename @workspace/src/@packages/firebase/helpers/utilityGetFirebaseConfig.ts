/** @format */

export const utilityGetFirebaseConfig = (): {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
} => {
  if (!process.env.REACT_APP_FIREBASE_APIKEY)
    throw new Error(`Missing variable process.env.REACT_APP_FIREBASE_APIKEY on .env.${process.env.NODE_ENV}`);

  if (!process.env.REACT_APP_FIREBASE_AUTHDOMAIN)
    throw new Error(`Missing variable process.env.REACT_APP_FIREBASE_AUTHDOMAIN on .env.${process.env.NODE_ENV}`);

  if (!process.env.REACT_APP_FIREBASE_PROJECTID)
    throw new Error(`Missing variable process.env.REACT_APP_FIREBASE_PROJECTID on .env.${process.env.NODE_ENV}`);

  if (!process.env.REACT_APP_FIREBASE_STORAGEBUCKET)
    throw new Error(`Missing variable process.env.REACT_APP_FIREBASE_STORAGEBUCKET on .env.${process.env.NODE_ENV}`);

  if (!process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID)
    throw new Error(
      `Missing variable process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID on .env.${process.env.NODE_ENV}`,
    );

  if (!process.env.REACT_APP_FIREBASE_APPID)
    throw new Error(`Missing variable process.env.REACT_APP_FIREBASE_APPID on .env.${process.env.NODE_ENV}`);

  if (!process.env.REACT_APP_FIREBASE_MEASUREMENTID)
    throw new Error(`Missing variable process.env.REACT_APP_FIREBASE_MEASUREMENTID on .env.${process.env.NODE_ENV}`);

  return {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
  };
};
