/** @format */

// #region ::: IMPORT
import { FC } from 'react';
// #endregion

interface Props {
  text: string;
  children: any;
  name: string;
  hide?: boolean;
}

export const UITab: FC<Props> = ({ children }: Props): JSX.Element => children;

UITab.displayName = 'Tab';
