/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { UIDatePicker, Props } from '.';

export default {
  title: 'Example/DatePicker',
  component: UIDatePicker,
  argTypes: {
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
    isFilter: { table: { disable: true } },
    hasBackground: { table: { disable: true } },
    disabledPastData: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = args => (
  <Providers>
    <UIDatePicker {...args} />
  </Providers>
);

export const Basic = Template.bind({});
Basic.args = {};
