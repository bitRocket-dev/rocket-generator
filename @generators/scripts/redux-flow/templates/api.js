/** @format */

exports.api = name => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return `
  import { fetch } from "../../helpers/functions/fetch";
  
  export const api${formattedName}List = async (): Promise<any> => {
    const result = await fetch.get('placeholder/list');
    return result;
  };
  
  export const api${formattedName}Detail = async (params: any): Promise<any> => {
    const result = await fetch.get('placeholder/detail');
    return result;
  };
  
  export const api${formattedName}Create = async (params: any): Promise<any> => {
    const result = await fetch.post('placeholder/create', { ...params });
    return result;
  };
  
  export const api${formattedName}Update = async (params: any): Promise<any> => {
    const result = await fetch.put('placeholder/update', { ...params });
    return result;
  };
  
  export const api${formattedName}Delete = async (params: any): Promise<any> => {
    const result = await fetch.delete('placeholder/delete');
    return result;
  };
    `;
};
