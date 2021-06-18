/** @format */

export const utilityArrayToObjectList = (array: Array<any>, keyField: string, objKeyField: string): Object => {
  return array.reduce((obj, item): any => {
    if (!(item[keyField] in obj)) {
      obj[item[keyField]] = {};
    }
    obj[item[keyField]][item[objKeyField]] = item;
    return obj;
  }, {});
};
