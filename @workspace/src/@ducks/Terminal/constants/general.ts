/** @format */

import { ColorMode, LineType } from 'react-terminal-ui';

export const TERMINAL_NAME = 'bitRocket Terminal';
export const TERMINAL_COLOR_MODE_DEFAULT = ColorMode.Dark;
export const TERMINAL_PROMPT_PATH = '~ %';
export const TERMINAL_GUEST_EMAIL = 'guest@bitrocket.dev';
export const TERMINAL_PROMPT = `${TERMINAL_GUEST_EMAIL} ${TERMINAL_PROMPT_PATH}`;

export const DEFAULT_TERMINAL_MESSAGES = [{ type: LineType.Output, value: 'Benvenuto su bitRocket.dev!' }];
