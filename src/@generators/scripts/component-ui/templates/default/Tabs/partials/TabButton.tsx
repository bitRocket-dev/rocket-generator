/** @format */

// #region ::: IMPORT
import React, { FC } from 'react';
import styled from 'styled-components';
import { TStyled } from '../../@theme';
import { NavigateTo } from '../../NavigateTo';
// #endregion

interface Styled extends TStyled {
  selected?: boolean;
  hide?: boolean;
}

const Tab = styled.div<Styled>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  cursor: pointer;
  padding: 0.2rem 1rem 0 1rem;
  border-bottom: ${({ theme }): string => `1px solid ${theme.colors.borderRow}`};
  ${({ hide }: Styled): string | false | undefined => hide && `display: none`}
  background: ${({ theme }): string => theme.colors.backgroundTabs};
  &:hover {
    ${({ selected, theme }: Styled): string | false | undefined =>
      !selected && `background: ${theme.colors.dark.primary};`};
    border-bottom: ${({ selected, theme }): string | false | undefined =>
      selected ? `3px solid ${theme.colors.primary}` : `3px solid ${theme.colors.hoverTabs}`};
  }
  border-bottom: ${({ selected, theme }): string | false | undefined =>
    selected ? `3px solid ${theme.colors.primary}` : '3px solid transparent'};
`;

export interface Props {
  children: JSX.Element;
  selected: boolean;
  onClick: () => void;
  name: string;
  hide?: boolean;
}

export const TabButton: FC<Props> = ({ children, selected, onClick, name, hide = false }) => {
  if (!hide)
    return (
      <NavigateTo to={`${name}`} dataCy={`BUTTON_TAB_${name}`} fluid={false}>
        <Tab onClick={onClick} selected={selected} hide={hide}>
          {children}
        </Tab>
      </NavigateTo>
    );
  return null;
};
TabButton.displayName = 'TabButton';
