/** @format */

exports.reducers = name => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return `
  export const reducer${formattedName} = (
    prevStore: TStore['${name}'] = {},
    action: TAction,
  ): TStore['${name}'] => {
    switch (action.type) {
      default:
        break;
    }
    return prevStore;
  };
    `;
};
