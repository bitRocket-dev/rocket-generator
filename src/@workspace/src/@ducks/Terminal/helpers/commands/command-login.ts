/** @format */

import { apiUserLogin } from '../../../../@packages/firebase/api/userLogin';
import { TCallBack, TMessages, TCommand } from '../../constants/commands';

export const commandLogin = ({
  callback,
  messages,
  command,
}: {
  callback: TCallBack;
  messages: TMessages;
  command: TCommand;
}): void => {
  apiUserLogin({ email: 'test@test.com', password: '123456' });
};
