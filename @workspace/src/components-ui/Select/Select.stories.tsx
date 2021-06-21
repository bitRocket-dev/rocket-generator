/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { UISelect, Props } from '.';

export default {
  title: 'Example/Select',
  component: UISelect,
} as Meta;

const Template: Story<Props> = args => (
  <Providers>
    <UISelect {...args} />
  </Providers>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Select Test',
  options: [
    { name: 'Test', value: 0 },
    { name: 'Test2', value: 1 },
    { name: 'Test3', value: 2 },
  ],
  onChange: (selected: number): void => console.log(selected),
};
