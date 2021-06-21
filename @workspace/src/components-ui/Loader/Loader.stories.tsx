/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { UILoader, Props } from '.';
import { Providers } from '../../Providers';

export default {
  title: 'Example/Loader',
  component: UILoader,
} as Meta;

const Template: Story<Props> = args => (
  <Providers>
    <UILoader {...args} />
  </Providers>
);

export const Basic = Template.bind({});
Basic.args = {};
