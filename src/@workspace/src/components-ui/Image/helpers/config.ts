/** @format */

export type IMAGE_VARIANT = keyof TIMAGE_VARIANTS;

export interface TIMAGE_VARIANT {
  fileName: string;
  density: number;
}

export interface TIMAGE_VARIANTS {
  tiny: TIMAGE_VARIANT[];
  small: TIMAGE_VARIANT[];
  medium: TIMAGE_VARIANT[];
  large: TIMAGE_VARIANT[];
  original: TIMAGE_VARIANT[];
}

export const IMAGE_VARIANTS: TIMAGE_VARIANTS = {
  tiny: [
    {
      fileName: 'tiny',
      density: 1,
    },
    {
      fileName: 'tiny@2',
      density: 2,
    },
  ],
  small: [
    {
      fileName: 'small',
      density: 1,
    },
    {
      fileName: 'small@2',
      density: 2,
    },
  ],
  medium: [
    {
      fileName: 'medium',
      density: 1,
    },
    {
      fileName: 'medium@2',
      density: 2,
    },
  ],
  large: [
    {
      fileName: 'large',
      density: 1,
    },
    {
      fileName: 'large@2',
      density: 2,
    },
  ],
  original: [
    {
      fileName: 'original',
      density: 1,
    },
  ],
};
