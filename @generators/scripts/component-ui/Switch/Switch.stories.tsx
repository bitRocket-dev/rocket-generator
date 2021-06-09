/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { ChangeEvent, useState } from 'react';
import { UISwitch, Props } from '.';
import { Providers } from '../../Providers';

export default {
  title: 'Example/Switch',
  component: UISwitch,
  argTypes: {
    onChange: { table: { disable: true } },
    isChecked: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setIsChecked(event.target.checked);

  return (
    <Providers>
      <UISwitch {...props} isChecked={isChecked} onChange={onChange} />
    </Providers>
  );
};

export const Default = Template.bind({});
