/** @format */

const { splitString } = require("./splitStringUtility");

exports.api = (name) => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
  const formattedOperation =
    names[0].charAt(0).toUpperCase() + names[0].slice(1);

  const handleOperation = (operation) => {
    switch (operation) {
      case "Create":
        return `       
export const api${formattedName}Create = async (params: any): Promise<any> => {
  const result = await fetch.post('placeholder/create', { ...params });
  return result;
};`;

      case "Delete":
        return `
export const api${formattedName}Delete = async (params: any): Promise<any> => {
  const result = await fetch.delete('placeholder/delete');
  return result;
};`;

      case "Update":
        return `
export const api${formattedName}Update = async (params: any): Promise<any> => {
  const result = await fetch.put('placeholder/update', { ...params });
  return result;
};`;

      case "List":
        return `
export const api${formattedName}List = async (): Promise<any> => {
  const result = await fetch.get('placeholder/list');
  return result;
};`;

      case "Detail":
        return ` 
export const api${formattedName}Detail = async (params: any): Promise<any> => {
  const result = await fetch.get('placeholder/detail');
  return result;
};`;

      default:
        break;
    }
  };

  return `
import { fetch } from '../../../utils/fetch';
${handleOperation(formattedOperation)}`;
};
