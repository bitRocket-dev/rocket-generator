/** @format */

import React, { FC, useState } from 'react';
import ReactTerminal from 'react-terminal-ui';
import { TCommand } from './constants/commands';
import { DEFAULT_TERMINAL_MESSAGES, TERMINAL_COLOR_MODE_DEFAULT, TERMINAL_NAME } from './constants/general';
import { utilityGetPrompt } from './helpers/utilityGetPrompt';
import { utilityManageTerminal } from './helpers/utilityManageTerminal';
import { Outer } from './partials/Outer';

export interface Props {
  user: any;
}

export const Terminal: FC<Props> = ({ user }): JSX.Element => {
  const [messages, setMessages] = useState(DEFAULT_TERMINAL_MESSAGES);

  const onInput = (input: string): void => {
    utilityManageTerminal({ command: input as TCommand, callback: setMessages, messages, user });
  };

  return (
    <Outer>
      <ReactTerminal
        name={TERMINAL_NAME}
        colorMode={TERMINAL_COLOR_MODE_DEFAULT}
        lineData={messages}
        onInput={onInput}
        prompt={utilityGetPrompt(user)}
      />
    </Outer>
  );
};
