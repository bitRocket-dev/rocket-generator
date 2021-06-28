/** @format */

import { splitString } from './splitStringUtility';

export const createDeclarations = (name: string): string => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);

  return `
  export interface T${formattedName} {}
  `;
};
