/** @format */

import { memo } from 'react';
import styled from 'styled-components';
import { Column as ColumnHedron } from 'hedron';
import { TStyled } from '../@theme';

interface PropsColumn {
  children: any;
  className?: string;
  divisions?: number;
  fluid?: boolean;
  hide?: boolean;
  lg?: number;
  lgShift?: number;
  md?: number;
  mdShift?: number;
  sm?: number;
  smShift?: number;
  xl?: number;
  xs?: number;
  xsShift?: number;
}

const ColumnBase = memo(
  ({
    children,
    className,
    divisions,
    fluid,
    hide,
    lg,
    lgShift,
    md,
    mdShift,
    sm,
    smShift,
    xl,
    xs,
    xsShift,
  }: PropsColumn) => {
    // SEE: https://github.com/JSBros/hedron/wiki/Grid-System#column-component
    const allowedProps = {
      children,
      className,
      divisions,
      fluid,
      hide,
      lg,
      lgShift,
      md,
      mdShift,
      sm,
      smShift,
      xl,
      xs,
      xsShift,
    };
    return <ColumnHedron {...allowedProps} />;
  },
);

ColumnBase.displayName = 'ColumnBase';

interface Props extends TStyled {
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  contents?: boolean;
  flex?: boolean;
  fluid?: boolean;
  fullHeight?: boolean;
  hide?: boolean;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  maxWidth?: number;
}

export const UIColumn = styled(ColumnBase)<Props>`
  ${({ flex }: Props) => flex && 'display: flex;'};
  ${({ contents }: Props) => contents && 'display: contents;'}
  ${({ justifyContent }: Props) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }: Props) => alignItems && `align-items: ${alignItems};`};
  ${({ fluid }: Props) => !fluid && 'padding: .5rem'};
  ${({ fullHeight }: Props) => fullHeight && 'height: 100%;'};
  ${({ maxWidth }: Props) => maxWidth && `max-width: ${maxWidth}px`};
`;

UIColumn.displayName = 'UIColumn';
