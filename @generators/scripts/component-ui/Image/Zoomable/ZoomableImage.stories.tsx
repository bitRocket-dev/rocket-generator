/** @format */

import { ImageZoomable, Props } from ".";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Providers } from "../Providers";

export default {
  title: "Example/ImageZoomable",
  component: ImageZoomable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Props> = (props) => (
  <Providers>
    <ImageZoomable {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {
  picture: {
    path: "https://api-beta.vuem.cloud/api/picture/2021/04/30/IUgcCCNvmvVphFFW8zdHNbxnLvztWDAMQkUnzC0z.jpg",
    fileExtension: "jpg",
  },
};
