/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';
import { UIImageBackground, Props } from './ImageBackground';

export default {
  title: 'Example/ImageBackground',
  component: UIImageBackground,
} as Meta;

const Template: Story<Props> = args => (
  <Providers>
    <div style={{ width: '200vh', height: '200vh' }}>
      <UIImageBackground {...args} />
    </div>
  </Providers>
);

export const Basic = Template.bind({});
Basic.args = {
  srcImage: 'https://wallpapercave.com/wp/wp3407103.jpg',
};
