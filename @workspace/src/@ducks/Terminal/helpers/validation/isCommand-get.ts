/** @format */

import memoize from 'fast-memoize';

export const isCommandGet = memoize((command: string): boolean => command.includes('get '));
