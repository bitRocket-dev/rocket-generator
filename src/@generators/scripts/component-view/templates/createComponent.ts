/** @format */

export const createComponent = name => `
import { FC } from "react";

export interface Props {}

export const View${name} :FC<Props> = ({}): JSX.Element => {
  return <div data-cy='view-${name}'>View${name}</div>;
};
`;
