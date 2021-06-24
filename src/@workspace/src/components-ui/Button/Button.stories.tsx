/** @format */

import { Props, UIButton } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';

export default {
  title: 'Example/Button',
  component: UIButton,
  argTypes: {
    onClick: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => (
  <Providers>
    <UIButton {...props}></UIButton>
  </Providers>
);

export const Default = Template.bind({});

Default.args = {
  text: 'button',
  icon: 'bank',
};
