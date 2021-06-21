/** @format */

import React, { useState, memo, useRef, lazy, Suspense, useEffect, MemoExoticComponent, FC } from 'react';
import 'intersection-observer';

export interface Props {
  component: () => Promise<{ default: React.ComponentType }>;
  onIntersection?: () => void;
  fallback: JSX.Element;
  threshold?: number;
  params?: any;
}

export const Observer: FC<Props> = memo(
  ({ component, onIntersection, fallback, threshold = 1, params = {}, ...rest }) => {
    const [hasIntersected, setIntersected] = useState(false);
    const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType> | null>();

    let observer;

    const observerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer = new IntersectionObserver(handleObserver, {
        root: null,
        threshold,
      });
      observer.observe(observerRef.current);
    }, []);

    useEffect(() => {
      if (hasIntersected) {
        setComponent(lazy(component));
        if (onIntersection) onIntersection();
      }
    }, [component, hasIntersected, onIntersection]);

    const handleObserver = (entities: any): void => {
      const isIntersecting = entities[0].isIntersecting;
      if (isIntersecting && !hasIntersected) setIntersected(true);
    };

    return (
      <div ref={observerRef}>
        {hasIntersected && Component && (
          <Suspense fallback={fallback}>{Component && <Component {...rest} {...params} />}</Suspense>
        )}
      </div>
    );
  },
);
