/** @format */

// #region ::: IMPORT
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Conversational } from '.';
import { ProviderTheme } from '../../theme/Provider';
// #endregion

export default {
  title: 'Example/Conversational',
  component: Conversational,
} as Meta;

const Template: Story = () => (
  <ProviderTheme>
    <Conversational />
  </ProviderTheme>
);

export const Default = Template.bind({});

Default.args = {};
