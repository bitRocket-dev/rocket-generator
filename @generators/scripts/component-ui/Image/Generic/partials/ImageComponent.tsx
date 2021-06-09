/** @format */

import { useImage } from 'react-image';
import { forwardRef, ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

// #region ::: UTILS
const checkImageExistence = (src: string): Promise<void> =>
  new Promise<void>(async (resolve, reject) => {
    try {
      const response = await fetch(src, { method: 'HEAD' });
      if (!response.ok) reject();
      else resolve();
    } catch (e) {
      reject();
    }
  });
// #endregion

// #region ::: PARTIALS
interface PropsImg {
  onClick?: () => void;
  show?: boolean;
}

const Img = styled.img<PropsImg>`
  width: inherit;
  height: inherit;
  object-fit: contain;
  transition: all 300ms ease-in-out;
  opacity: 0;
  ${({ show }) => show && 'opacity: 1;'}
  ${({ onClick }) => !!onClick && `cursor: pointer;`}
`;
// #endregion

export interface Props {
  srcList: string | string[];
  className?: string;
  onClick?: () => void;
  loading?: 'eager' | 'lazy';
}

export const ImageComponent: ForwardRefExoticComponent<Props & RefAttributes<unknown>> = forwardRef(
  ({ onClick, className, srcList, loading }, ref): JSX.Element => {
    const [loaded, setLoaded] = useState(false);
    const { src } = useImage({ srcList, imgPromise: checkImageExistence });

    const onLoad = () => setLoaded(true);

    return (
      <Transition in={loaded} timeout={300}>
        {state => (
          <Img
            //  @ts-ignore
            ref={ref}
            onLoad={onLoad}
            className={className}
            src={src}
            onClick={onClick}
            loading={loading}
            show={state === 'entering' || state === 'entered'}
          />
        )}
      </Transition>
    );
  },
);
