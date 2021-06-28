/** @format */

import styled from 'styled-components';

const mediaSm = '@media (min-width:760px)';
export const Grow = styled.div`
  flex: 1;
  z-index: 5;
  &.onlyDS {
    display: none;
    ${mediaSm} {
      display: block;
    }
  }
`;
