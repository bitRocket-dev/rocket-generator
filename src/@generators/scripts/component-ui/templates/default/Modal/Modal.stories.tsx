/** @format */

import { UIModal, Props } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../Providers';
import { useState } from 'react';

export default {
  title: 'Example/Modal',
  component: UIModal,
} as Meta;

const Template: Story<Props> = props => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(!open);

  return (
    <Providers>
      <UIModal {...props} isOpen={open} onClose={handleClose}>
        <div style={{ height: '100px' }}>Example</div>
      </UIModal>
    </Providers>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
