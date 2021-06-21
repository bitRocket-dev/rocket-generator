/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Board } from '.';
import { Providers } from '../../Providers';

export default {
  title: 'Example/Board',
  component: Board,
} as Meta;

const Template: Story = props => (
  <Providers>
    <Board {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {};
