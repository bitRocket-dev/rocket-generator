/** @format */

import { IMAGE_VARIANT, IMAGE_VARIANTS, TIMAGE_VARIANT } from './config';

export const utilityGetImageSrc = (
  picture: { path: string; fileExtension: string },
  variant?: IMAGE_VARIANT,
): string[] => {
  const pixelRateo = Math.trunc(window.devicePixelRatio);

  if (!variant) return [utilityFormatPictureVariant(IMAGE_VARIANTS['original'][0], picture)];

  const foundVariant =
    IMAGE_VARIANTS[variant].find(currentVariant => currentVariant.density === pixelRateo) || IMAGE_VARIANTS[variant][0];

  return [utilityFormatPictureVariant(foundVariant, picture), ...utilityGetImageSrc(picture)];
};

const utilityFormatPictureVariant = (
  variant: TIMAGE_VARIANT,
  picture: { path: string; fileExtension: string },
): string => `${picture.path}/${variant.fileName}${picture.fileExtension ? `.${picture.fileExtension}` : ''}`;
