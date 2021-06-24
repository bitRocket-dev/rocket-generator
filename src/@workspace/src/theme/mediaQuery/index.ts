/** @format */

import { css, FlattenSimpleInterpolation } from 'styled-components';
import { themeBreakpoints } from './breakpoints';
import { CSSObject } from 'styled-components';

const add = (a: TemplateStringsArray | CSSObject): TemplateStringsArray | CSSObject => a;
type TMediaQueryParams = Parameters<typeof add>;

export const mediaQuery = Object.keys(themeBreakpoints).reduce((acc: any, label: any) => {
  acc[label] = (...args: TemplateStringsArray | CSSObject[]): FlattenSimpleInterpolation => css`
    @media (min-width: ${themeBreakpoints[label]}px) {
      ${css(...(args as TMediaQueryParams))};
    }
  `;
  return acc;
}, {});
