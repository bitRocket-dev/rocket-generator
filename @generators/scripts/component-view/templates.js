/** @format */

exports.component = name => `
import { FC } from "react";

export interface Props {}

export const View${name} :FC<Props> = ({}): JSX.Element => {
  return <div>View${name}</div>;
};
`;

exports.gitkeep = () => ``;
