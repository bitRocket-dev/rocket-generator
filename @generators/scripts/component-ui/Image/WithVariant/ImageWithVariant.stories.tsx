/** @format */

import { ImageWithVariant, Props } from ".";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Providers } from "../Providers";

export default {
  title: "Example/ImageWithVariant",
  component: ImageWithVariant,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Props> = (props) => (
  <Providers>
    {" "}
    <ImageWithVariant {...props} />{" "}
  </Providers>
);

export const Default = Template.bind({});

Default.args = {};
