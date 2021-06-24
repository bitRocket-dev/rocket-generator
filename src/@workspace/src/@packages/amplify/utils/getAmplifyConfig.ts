/** @format */

export const utilityGetAmplifyConfig = (): {
  region: string;
  userPoolId: string;
  userPoolWebClientId: string;
  authenticationFlowType: string;
} => {
  if (!process.env.REACT_APP_AMPLIFY_REGION)
    throw new Error(`Missing variable REACT_APP_AMPLIFY_REGION on .env.${process.env.NODE_ENV} `);
  if (!process.env.REACT_APP_AMPLIFY_USER_POOL_ID)
    throw new Error(`Missing variable REACT_APP_AMPLIFY_USER_POOL_ID on .env.${process.env.NODE_ENV} `);
  if (!process.env.REACT_APP_AMPLIFY_USER_POOL_WEB_CLIENT_ID)
    throw new Error(`Missing variable REACT_APP_AMPLIFY_USER_POOL_WEB_CLIENT_ID on .env.${process.env.NODE_ENV} `);

  return {
    region: process.env.REACT_APP_AMPLIFY_REGION,
    userPoolId: process.env.REACT_APP_AMPLIFY_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AMPLIFY_USER_POOL_WEB_CLIENT_ID,
    authenticationFlowType: 'CUSTOM_AUTH',
  };
};
