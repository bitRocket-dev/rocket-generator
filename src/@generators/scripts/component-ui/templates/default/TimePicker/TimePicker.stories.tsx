/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../Providers';
import { UITimePicker, Props } from '.';

export default {
  title: 'Example/TimePicker',
  component: UITimePicker,
  argTypes: {
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
  },
} as Meta;

export const Basic: Story<Props> = args => (
  <Providers>
    <UITimePicker {...args} />
  </Providers>
);
