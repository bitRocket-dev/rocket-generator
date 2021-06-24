/** @format */

import { LineType } from 'react-terminal-ui';

export type TCommand = 'help' | 'clear' | 'api-get';

export type TCallBack = React.Dispatch<
  React.SetStateAction<
    {
      type: LineType;
      value: string;
    }[]
  >
>;

export type TMessages = {
  type: LineType;
  value: string;
}[];
