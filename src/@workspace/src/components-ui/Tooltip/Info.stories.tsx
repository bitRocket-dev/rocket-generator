/** @format */

import { UITooltip, Props } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';

export default {
  title: 'Example/Tooltip',
  component: UITooltip,
} as Meta;

const Template: Story<Props> = props => (
  <Providers>
    <UITooltip {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {};
