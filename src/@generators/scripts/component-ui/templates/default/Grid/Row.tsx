/** @format */

import { FC, memo } from 'react';
import styled from 'styled-components';
import { Row as RowHedron } from 'hedron';
import { TStyled } from '../@theme';

export interface PropsRow {
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  children?: any;
  className?: string;
  divisions?: any;
  flexDirection?: 'row' | 'row-reverse';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
}

const RowBase: FC = memo(({ alignItems, divisions, justifyContent, children, className }: PropsRow): JSX.Element => {
  const allowedProps = {
    alignItems,
    divisions,
    justifyContent,
    children,
    className,
  };

  return <RowHedron {...allowedProps} />;
});

RowBase.displayName = 'RowBase';

interface Props extends TStyled {
  flex?: boolean;
  fullHeight?: boolean;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'row-reverse';
}

export const UIRow = styled(RowBase)<Props>`
  ${({ flex }: Props) => flex && 'display: flex;'};
  ${({ justifyContent }: Props) => justifyContent && `justify-content: ${justifyContent};`};
  ${({ alignItems }: Props) => alignItems && `align-items: ${alignItems};`};
  width: 100%;
`;

UIRow.displayName = 'UIRow';
