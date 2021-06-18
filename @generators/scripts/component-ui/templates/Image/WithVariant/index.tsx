/** @format */

import { forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import { ImageGeneric } from '../Generic';
import { IMAGE_VARIANT } from '../helpers/config';
import { utilityGetImageSrc } from '../helpers/getImageSrc';

export interface Props {
  picture: TPictureObject;
  variant: IMAGE_VARIANT;
  className?: string;
  errorIcon?: ReactElement;
  onClick?: () => void;
  onErrorClick?: () => void;
  loading?: 'eager' | 'lazy';
}

export interface TPictureObject {
  path: string;
  fileExtension: string;
}

export const ImageWithVariant: ForwardRefExoticComponent<Props & RefAttributes<unknown>> = forwardRef(
  ({ picture, variant, ...props }, ref): JSX.Element => (
    <ImageGeneric ref={ref} srcList={utilityGetImageSrc(picture, variant)} {...props} />
  ),
);
