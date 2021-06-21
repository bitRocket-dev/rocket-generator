/** @format */

import memoize from 'fast-memoize';

export const isCommandClear = memoize((command: string): boolean => command.trim() === 'clear');
