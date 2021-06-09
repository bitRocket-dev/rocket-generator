/** @format */

import { UISteps, Props } from './';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { useState } from 'react';
import { UIStep } from './partials/Step';

export default {
  title: 'Example/Steps',
  component: UISteps,
} as Meta;

const Template: Story<Props> = () => {
  const [selected, setSelected] = useState('step1');

  return (
    <Providers>
      <UISteps selected={selected}>
        <UIStep name="step1">
          <h1>Step 1</h1>
          <button onClick={() => setSelected('step2')}>Continue</button>
        </UIStep>
        <UIStep name="step2">
          <h1>Step 2</h1>
          <button onClick={() => setSelected('step1')}>Indietro</button>
          <button onClick={() => setSelected('step3')}>Continue</button>
        </UIStep>
        <UIStep name="step3">
          <h1>Step 3</h1>
          <button onClick={() => setSelected('step2')}>Indietro</button>
        </UIStep>
      </UISteps>
    </Providers>
  );
};

export const Default = Template.bind({});

Default.args = {};
