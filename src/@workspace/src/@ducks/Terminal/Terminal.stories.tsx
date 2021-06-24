/** @format */

// #region ::: IMPORT
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Props, Terminal } from '.';
import { ProviderTheme } from '../../theme/Provider';
// #endregion

export default {
  title: 'Example/Terminal',
  component: Terminal,
} as Meta;

const Template: Story<Props> = props => (
  <ProviderTheme>
    <Terminal {...props} />
  </ProviderTheme>
);

export const Default = Template.bind({});

Default.args = {};
