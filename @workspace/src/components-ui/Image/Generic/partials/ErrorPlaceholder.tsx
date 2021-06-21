/** @format */

import { FC, memo, ReactElement } from 'react';
import styled from 'styled-components';

// #region ::: PARTIALS
const ErrorIconContainer = styled.div<{ onClick?: () => void }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
  background-color: ${({ theme }) => theme.colors.alertTransparent};
  ${({ onClick }) => !!onClick && `cursor: pointer;`}
`;
//#endregion

interface Props {
  onClick?: () => void;
  className?: string;
  icon: ReactElement;
}

export const ErrorPlaceholder: FC<Props> = memo(
  ({ icon, className, onClick }): JSX.Element => (
    <ErrorIconContainer onClick={onClick} className={className}>
      {icon}
    </ErrorIconContainer>
  ),
);
