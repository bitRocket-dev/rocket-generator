/** @format */

export const utilityArrayToObject = (array: Array<any>, keyField: string): Object => {
  return array.reduce((obj, item): any => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};
