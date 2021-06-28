/** @format */

import { FC, MutableRefObject, useCallback, useRef } from 'react';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';
import { ImageWithVariant, Props as PropsWithVariant } from '../WithVariant';

export interface Props extends PropsWithVariant {}

export const ImageZoomable: FC<Props> = ({ dataCy = 'ImageZoomable', ...props }): JSX.Element => {
  const imgRef = useRef() as MutableRefObject<HTMLImageElement>;
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty('transform', value);
    }
  }, []);

  return (
    <div data-cy={dataCy}>
      <QuickPinchZoom inertia={false} animationDuration={100} wheelScaleFactor={2000} onUpdate={onUpdate}>
        <ImageWithVariant ref={imgRef} {...props} />
      </QuickPinchZoom>
    </div>
  );
};
