/** @format */

import { ImageGeneric, Props } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';

export default {
  title: 'Example/ImageGeneric',
  component: ImageGeneric,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = props => (
  <Providers>
    <div style={{ width: 300, height: 300 }}>
      <ImageGeneric {...props} />
    </div>
  </Providers>
);

export const Default = Template.bind({});

Default.args = {
  srcList: ['https://api-beta.vuem.cloud/api/picture/2021/04/30/IUgcCCNvmvVphFFW8zdHNbxnLvztWDAMQkUnzC0z.jpg'],
};
