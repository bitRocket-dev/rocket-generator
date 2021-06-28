/** @format */

export const createActions = (name: string, choices: string[]) => {
  const nameActionTypeUpper = name.toUpperCase();
  const nameActionTypeLowewr = name.charAt(0).toUpperCase() + name.slice(1);

  return `/** @format */
  // prettier-ignore

import {
  ${choices.map(operation => `AT_${nameActionTypeUpper}_${operation.toUpperCase()},\n`).join('')}} from './constants';

${choices
  .map(
    operation =>
      `export const action${nameActionTypeLowewr}${operation} = (payload: any) => ({
  type: AT_${nameActionTypeUpper}_${operation.toUpperCase()},
  payload,
  });\r`,
  )
  .join('')}
`;
};
