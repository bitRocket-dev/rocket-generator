/** @format */

import { createGlobalStyle } from 'styled-components';
import { mediaQuery } from './mediaQuery';
import './normalize.css';

export const ThemeGlobalStyle = createGlobalStyle`
 //@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
  html {
    font-size: 100% !important;
    ${mediaQuery.sm`
        font-size: 100% !important;
      `};
    ${mediaQuery.md`
        font-size: 90% !important;
      `};
    ${mediaQuery.lg`
        font-size: 90% !important;
      `};
    ${mediaQuery.xl`
        font-size: 95% !important;
      `};
   }
`;
