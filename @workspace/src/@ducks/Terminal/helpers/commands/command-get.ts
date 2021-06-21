/** @format */

import { LineType } from 'react-terminal-ui';
import { TCallBack, TCommand, TMessages } from '../../constants/commands';
import { TERMINAL_PROMPT } from '../../constants/general';
import { commandNotFound } from './command-not-found';

export const commandGet = ({
  callback,
  messages,
  command,
}: {
  callback: TCallBack;
  messages: TMessages;
  command: TCommand;
}): void => {
  const arrayOfCommands = command.split(' ');
  if (arrayOfCommands.length > 2) return commandNotFound({ callback, command, messages });

  fetch(arrayOfCommands[1])
    .then(res => res.json())
    .then(res =>
      callback([
        ...messages,
        {
          type: LineType.Output,
          value: `${TERMINAL_PROMPT} ${command}`,
        },
        {
          type: LineType.Output,
          value: JSON.stringify(res),
        },
      ]),
    );
};
