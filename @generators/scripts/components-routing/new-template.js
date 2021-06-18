/** @format */

exports.component = (name) => `
import {FC} from "react";

export interface Props{}

export const Route${name} :FC<Props> = ({}): JSX.Element => {
  return <div data-cy='route-${name}'>Route${name}</div>;
};
`;
