/** @format */

export const createDeclarations = (name: string): string => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return `/** @format */

  export interface T${formattedName} {}
  `;
};
