/** @format */

import { FC, memo } from 'react';
import { UIIcon } from '../../../Icon';
import { CloseIcon } from './partials/CloseIcon';
import { Wrapper } from './partials/Wrapper';

interface Props {
  onClose: () => void;
}

export const ModalHeader: FC<Props> = memo(
  ({ onClose }): JSX.Element => (
    <Wrapper>
      <CloseIcon onClick={onClose}>
        <UIIcon icon="close" size="sm" />
      </CloseIcon>
    </Wrapper>
  ),
);

ModalHeader.displayName = 'ModalHeader';
