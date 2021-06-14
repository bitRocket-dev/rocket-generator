/** @format */

exports.component = (name) => `
import {FC} from "react";

export interface Props{
  path: string;
  component: FC;
  exact?: boolean;
}

`;
