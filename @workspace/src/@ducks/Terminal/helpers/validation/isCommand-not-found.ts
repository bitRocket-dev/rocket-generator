/** @format */

import memoize from 'fast-memoize';
import { isCommandClear } from './isCommand-clear';
import { isCommandGet } from './isCommand-get';
import { isCommandGoto } from './isCommand-goto';
import { isCommandHelp } from './isCommand-help';

export const isCommandNotFound = memoize((command: string): boolean => {
  if (!isCommandClear(command) && !isCommandGet(command) && !isCommandGoto(command) && !isCommandHelp(command))
    return true;
  return false;
});
