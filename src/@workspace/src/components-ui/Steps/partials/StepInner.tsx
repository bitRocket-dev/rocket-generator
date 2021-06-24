/** @format */

import styled from 'styled-components';
import { TStyled } from '../../../theme';

interface Props extends TStyled {
  isVisible?: boolean;
}

export const StepInner = styled.div<Props>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: ${({ isVisible }: Props) => (isVisible ? 'block' : 'none')};
`;
