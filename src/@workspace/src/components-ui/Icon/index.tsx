/** @format */

import { FC, memo } from 'react';
import styled from 'styled-components';
import { TStyled } from '../../theme';
import srcBank from './assets/bg_bank.svg';
import srcClose from './assets/bg_close.svg';
import srcCalendar from './assets/bg_calendar.svg';
import srcTime from './assets/bg_time.svg';
import { TSize } from './helpers/declarations';
import { utilityGetSizes } from './helpers/getSize';

export type TIcon = 'bank' | 'close' | 'calendar' | 'time';

interface PropsIcon extends TStyled {
  width: number;
  height: number;
}

const Icon = styled.img<PropsIcon>``;

export interface Props {
  size?: TSize;
  icon: TIcon;
}

export const UIIcon: FC<Props> = memo(({ icon, size = 'md' }): JSX.Element | null => {
  const { width, height } = utilityGetSizes(size);

  switch (icon) {
    case 'bank':
      return <Icon width={width} height={height} src={srcBank} />;
    case 'calendar':
      return <Icon width={width} height={height} src={srcCalendar} />;
    case 'close':
      return <Icon width={width} height={height} src={srcClose} />;
    case 'time':
      return <Icon width={width} height={height} src={srcTime} />;
    default:
      return null;
  }
});
UIIcon.displayName = 'UIIcon';
