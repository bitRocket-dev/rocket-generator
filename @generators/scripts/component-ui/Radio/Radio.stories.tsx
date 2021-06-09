/** @format */

import { Props, UIRadioButton } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Example/RadioButton',
  component: UIRadioButton,
  argTypes: {
    onChange: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setIsChecked(event.target.checked);

  return (
    <Providers>
      <UIRadioButton {...props} checked={isChecked} onChange={onChange} />
    </Providers>
  );
};

export const Default = Template.bind({});

Default.args = {};
