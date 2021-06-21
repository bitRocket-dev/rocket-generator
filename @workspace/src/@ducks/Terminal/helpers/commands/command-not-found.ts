/** @format */

import { LineType } from 'react-terminal-ui';
import { TCallBack, TCommand, TMessages } from '../../constants/commands';
import { TERMINAL_PROMPT } from '../../constants/general';

export const commandNotFound = ({
  callback,
  messages,
  command,
}: {
  callback: TCallBack;
  messages: TMessages;
  command: TCommand;
}): void => {
  callback([
    ...messages,
    {
      type: LineType.Output,
      value: `${TERMINAL_PROMPT} ${command}`,
    },
    {
      type: LineType.Output,
      value: `command not found: ${command}`,
    },
  ]);
};
