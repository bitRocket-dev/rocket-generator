/** @format */

// #region ::: IMPORT
import { FC, memo } from "react";
import styled from "styled-components";
// #endregion

// #region ::: PARTIALS
interface PropsStyled {
  srcImage: string;
  filterBlur?: number;
}

export const ImageBackground = styled.div<PropsStyled>`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: ${({ srcImage }: PropsStyled): string =>
    `url(${srcImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ filterBlur }: PropsStyled): any =>
    filterBlur && `filter: blur(${filterBlur}px);`}
`;
// #endregion

export interface Props {
  dataCy?: string;
  srcImage: string;
  filterBlur?: number;
}

export const UIImageBackground: FC<Props> = memo(
  ({
    srcImage,
    filterBlur = 2,
    dataCy = "UIImageBackground",
  }: Props): JSX.Element => (
    <ImageBackground
      filterBlur={filterBlur}
      srcImage={srcImage}
      data-cy={dataCy}
    />
  )
);

UIImageBackground.displayName = "UIImageBackground";
