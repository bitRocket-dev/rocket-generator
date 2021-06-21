/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { UIIcon, Props } from '.';

export default {
  title: 'Example/Icon',
  component: UIIcon,
} as Meta;

export const Template: Story<Props> = props => (
  <Providers>
    <UIIcon {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {
  icon: 'bank',
};
