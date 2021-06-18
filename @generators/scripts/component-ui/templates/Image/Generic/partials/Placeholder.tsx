/** @format */
import { FC, memo } from 'react';
import styled from 'styled-components';
import { UILoader } from '../../../Loader';

// #region ::: PARTIALS
const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryActiveTransparent};
`;
//#endregion

interface Props {
  className?: string;
}

export const Placeholder: FC<Props> = memo(
  ({ className }): JSX.Element => (
    <Outer className={className}>
      <UILoader />
    </Outer>
  ),
);
