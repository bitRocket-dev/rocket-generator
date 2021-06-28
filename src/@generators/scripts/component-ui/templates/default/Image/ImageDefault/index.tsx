/** @format */

// #region ::: IMPORT
import { FC, memo } from 'react';
import { Image } from './partials/Image';
// #endregion

export interface Props {
  dataCy?: string;
  src: string;
  height?: number;
  width?: number;
  borderRadius?: number;
  onClick?: any;
  hasDarkBackground?: boolean;
}

export const UIImage: FC<Props> = memo(
  ({
    src,
    width,
    height,
    borderRadius,
    onClick,
    hasDarkBackground = false,
    dataCy = 'UIImage',
  }: Props): JSX.Element => (
    <Image
      src={src}
      width={width}
      height={height}
      borderRadius={borderRadius}
      onClick={onClick}
      hasDarkBackground={hasDarkBackground}
      data-cy={dataCy}
    />
  ),
);

UIImage.displayName = 'UIImage';
