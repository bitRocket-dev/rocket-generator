/** @format */

import React, { FC, memo, SyntheticEvent } from 'react';
import { useNavigation } from '../../@sdk/hooks/useNavigation';
import { Wrapper } from './partials/Wrapper';

export interface Props {
  to: string;
  children: any;
  dataCy: string;
  fluid?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const NavigateTo: FC<Props> = memo(
  ({ to, children, dataCy, fluid = true, onClick: callback, disabled }: Props): JSX.Element => {
    const { navTo } = useNavigation();

    const onClick = (event: SyntheticEvent): void => {
      event.stopPropagation();
      if (disabled) return;
      navTo(to);
      if (callback) callback();
    };

    return (
      <Wrapper onClick={onClick} data-cy={dataCy} fluid={fluid} disabled={disabled}>
        {children}
      </Wrapper>
    );
  },
);
NavigateTo.displayName = 'NavigateTo';
