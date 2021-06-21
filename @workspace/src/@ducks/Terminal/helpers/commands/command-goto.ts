/** @format */

import { TCallBack, TCommand, TMessages } from '../../constants/commands';
import { commandNotFound } from './command-not-found';

export const commandGoto = ({
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

  let url = arrayOfCommands[1];

  if (!url.includes('http://') && !url.includes('https://')) url = `https://${url}`;

  window.open(url);
};
