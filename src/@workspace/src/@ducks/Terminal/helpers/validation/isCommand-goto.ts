/** @format */

import memoize from 'fast-memoize';

export const isCommandGoto = memoize((command: string): boolean => command.includes('goto '));
