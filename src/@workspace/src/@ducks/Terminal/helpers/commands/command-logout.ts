/** @format */

import { LineType } from 'react-terminal-ui';
import { TCallBack, TMessages, TCommand } from '../../constants/commands';
import firebaseLib from 'firebase';
import { utilityGetPrompt } from '../utilityGetPrompt';
import { apiUserLogout } from '../../../../@packages/firebase/api/userLogout';

export const commandLogout = ({
  user,
  callback,
  messages,
  command,
}: {
  user: firebaseLib.User;
  callback: TCallBack;
  messages: TMessages;
  command: TCommand;
}): void => {
  callback([
    ...messages,
    {
      type: LineType.Output,
      value: `${utilityGetPrompt(user)} ${command}`,
    },
    {
      type: LineType.Output,
      value: 'Logout Success!',
    },
  ]);
  apiUserLogout();
};
