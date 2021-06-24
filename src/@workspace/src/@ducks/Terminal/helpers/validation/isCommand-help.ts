/** @format */

import memoize from 'fast-memoize';

export const isCommandHelp = memoize((command: string): boolean => command.trim() === 'help');
