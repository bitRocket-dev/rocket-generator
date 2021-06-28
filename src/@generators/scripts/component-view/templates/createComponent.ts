/** @format */

export const createComponent = (name: string): string => `
import { FC } from "react";

export interface Props {}

export const View${name} :FC<Props> = ({}): JSX.Element => {
  return <div data-cy='view-${name}'>View${name}</div>;
};
`;
