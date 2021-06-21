/** @format */

import { UIVisible, Props } from './index';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Example/Visible',
  component: UIVisible,
} as Meta;

const Template: Story<Props> = props => (
  <UIVisible {...props}>
    <h1>I'm visibile!</h1>
  </UIVisible>
);

export const Default = Template.bind({});

Default.args = { type: 'desktop' };
