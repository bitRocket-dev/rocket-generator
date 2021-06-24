/** @format */

import { TCallBack, TCommand, TMessages } from '../constants/commands';
import { isCommandClear } from './validation/isCommand-clear';
import { isCommandHelp } from './validation/isCommand-help';
import { isCommandGet } from './validation/isCommand-get';
import { isCommandGoto } from './validation/isCommand-goto';
import memoize from 'fast-memoize';
import firebaseLib from 'firebase';
import { isCommandLogin } from './validation/isCommand-login';
import { isCommandLogout } from './validation/isCommand-logout';
import { commandClear } from './commands/command-clear';
import { commandGet } from './commands/command-get';
import { commandGoto } from './commands/command-goto';
import { commandHelp } from './commands/command-help';
import { commandLogin } from './commands/command-login';
import { commandLogout } from './commands/command-logout';
import { commandNotFound } from './commands/command-not-found';

export const utilityManageTerminal = memoize(
  ({
    command,
    callback,
    messages,
    user,
  }: {
    command: TCommand;
    callback: TCallBack;
    messages: TMessages;
    user: firebaseLib.User;
  }): void => {
    if (isCommandClear(command)) return commandClear({ callback });
    if (isCommandHelp(command)) return commandHelp({ callback, command, messages });
    if (isCommandGet(command)) return commandGet({ callback, command, messages });
    if (isCommandGoto(command)) return commandGoto({ callback, command, messages });
    if (isCommandLogin(command)) return commandLogin({ callback, command, messages });
    if (isCommandLogout(command)) return commandLogout({ callback, command, messages, user });

    return commandNotFound({ callback, command, messages });
  },
);
