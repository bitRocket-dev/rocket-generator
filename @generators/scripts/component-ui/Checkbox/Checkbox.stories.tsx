/** @format */

import { UICheckbox, Props } from './';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Example/Checkbox',
  component: UICheckbox,
  argTypes: {
    onChange: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked);

  return (
    <Providers>
      <UICheckbox {...props} checked={isChecked} onChange={onChange} />
    </Providers>
  );
};

export const Default = Template.bind({});
