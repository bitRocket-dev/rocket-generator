/** @format */

import { splitString } from './splitStringUtility';

export const api = name => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
  const formattedOperation = names[0].charAt(0).toUpperCase() + names[0].slice(1);

  const handleOperation = operation => {
    switch (operation) {
      case 'Create':
        return `       
export const api${formattedName}Create = async (): Promise<any> => {
  const result = await fetch("---");
  return result;
};`;

      case 'Delete':
        return `
export const api${formattedName}Delete = async (): Promise<any> => {
  const result = await fetch("---");
  return result;
};`;

      case 'Update':
        return `
export const api${formattedName}Update = async (): Promise<any> => {
  const result = await fetch("---");
  return result;
};`;

      case 'List':
        return `
export const api${formattedName}List = async (): Promise<any> => {
  const result = await fetch("---");
  return result;
};`;

      case 'Detail':
        return ` 
export const api${formattedName}Detail = async (): Promise<any> => {
  const result = await fetch("---");
  return result;
};`;

      default:
        break;
    }
  };

  return `
${handleOperation(formattedOperation)}`;
};
