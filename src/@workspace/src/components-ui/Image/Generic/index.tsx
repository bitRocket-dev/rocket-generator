/** @format */

import { forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes, Suspense } from 'react';
import { ImageComponent } from './partials/ImageComponent';
import ImageErrorBoundary from './partials/ErrorBoundary';
import { Placeholder } from './partials/Placeholder';

export interface Props {
  className?: string;
  errorIcon?: ReactElement;
  srcList: string | string[];
  onClick?: () => void;
  onErrorClick?: () => void;
  loading?: 'eager' | 'lazy';
}

export const ImageGeneric: ForwardRefExoticComponent<Props & RefAttributes<unknown>> = forwardRef(
  ({ srcList, className, onClick, loading }, ref): JSX.Element => (
    <Suspense fallback={<Placeholder className={className} />}>
      <ImageErrorBoundary className={className}>
        <ImageComponent ref={ref} loading={loading} className={className} srcList={srcList} onClick={onClick} />
      </ImageErrorBoundary>
    </Suspense>
  ),
);
