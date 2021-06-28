/** @format */

export const envOption = (options: string[]): string =>
  `
REACT_APP_FIREBASE_APIKEY=${options[0]},
REACT_APP_FIREBASE_AUTHDOMAIN=${options[1]},
REACT_APP_FIREBASE_PROJECTID=${options[2]},
REACT_APP_FIREBASE_STORAGEBUCKET=${options[3]},
REACT_APP_FIREBASE_MESSAGINGSENDERID=${options[4]},
REACT_APP_FIREBASE_APPID=${options[5]},
REACT_APP_FIREBASE_MEASUREMENTID=${options[6]},
`;
