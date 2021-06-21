/** @format */

import Amplify from 'aws-amplify';
import { FC } from 'react';
import { utilityGetAmplifyConfig } from './utils/getAmplifyConfig';

interface Props {
  children: JSX.Element;
}

export const ProviderAmplify: FC<Props> = ({ children }): JSX.Element => {
  const { region, userPoolId, userPoolWebClientId, authenticationFlowType } = utilityGetAmplifyConfig();

  Amplify.configure({ Auth: { region, userPoolId, userPoolWebClientId, authenticationFlowType } });

  return children;
};
