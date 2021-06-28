/** @format */

export const createComponent = name => `
import { FC } from "react";

export interface Props {}

export const ${name} :FC<Props> = ({}): JSX.Element => {
  return <div>${name}</div>;
};
`;
