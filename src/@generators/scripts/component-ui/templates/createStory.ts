/** @format */

export const createStory = name => `
import { UI${name}, Props } from './';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../Providers';

export default {
  title: 'Example/${name}',
  component: UI${name},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = props => (
  <Providers>
    <UI${name} {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {};
`;
