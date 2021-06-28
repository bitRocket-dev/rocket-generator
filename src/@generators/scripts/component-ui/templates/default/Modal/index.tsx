/** @format */

import { FC, memo } from 'react';
import { Backdrop } from './partials/Backdrop';
import { Content } from './partials/Content';
import { Grow } from './partials/Grow';
import { ModalContent } from './partials/ModalContent';
import { ModalHeader } from './partials/ModalHeader';
import { Outer } from './partials/Outer';

export interface Props {
  children: {};
  onClose: () => void;
  isOpen: boolean;
  dataCy?: string;
}

export const UIModal: FC<Props> = memo(
  ({ children, onClose, isOpen, dataCy = 'UIModal' }): JSX.Element => (
    <>
      {isOpen && (
        <Outer data-cy={dataCy}>
          <Backdrop />
          <Content>
            <Grow />
            <div>
              <ModalHeader onClose={onClose} />
              <ModalContent>{children}</ModalContent>
            </div>
            <Grow className={'onlyDS'} />
          </Content>
        </Outer>
      )}
    </>
  ),
);

UIModal.displayName = 'Modal';
