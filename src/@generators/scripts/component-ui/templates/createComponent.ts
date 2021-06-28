/** @format */

export const createComponent = name => `
import { FC } from "react";

export interface Props {}

export const UI${name} :FC<Props> = ({}): JSX.Element => {
  return <div data-cy='ui-${name}'>UI${name}</div>;
};
`;
