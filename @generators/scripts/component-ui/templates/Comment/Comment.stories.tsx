/** @format */

import { UIComment, Props } from "./";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Providers } from "../Providers";

export default {
  title: "Example/Comment",
  component: UIComment,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (props) => (
  <Providers>
    <UIComment {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {
  text: "commento",
};
