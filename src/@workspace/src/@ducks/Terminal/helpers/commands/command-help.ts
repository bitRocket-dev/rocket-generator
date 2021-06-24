/** @format */

import { LineType } from 'react-terminal-ui';
import { TCallBack, TCommand, TMessages } from '../../constants/commands';
import { TERMINAL_PROMPT } from '../../constants/general';

export const commandHelp = ({
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
      value: `> clear : svuota la console`,
    },
    {
      type: LineType.Output,
      value: `> get : effettua una chiamata GET`,
    },
    {
      type: LineType.Output,
      value: `> goto : naviga verso un sito aprendo una tab sul browser`,
    },
  ]);
};
