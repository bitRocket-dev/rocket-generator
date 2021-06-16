/** @format */

import { Story, Meta } from "@storybook/react/types-6-0";

import { Providers } from "../../Providers";
import { UIImage, Props } from ".";

export default {
  title: "Example/Image",
  component: UIImage,
  argTypes: {
    onClick: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Providers>
    <div style={{ width: "300px", height: "300px" }}>
      <UIImage {...args} />
    </div>
  </Providers>
);

export const Basic = Template.bind({});
Basic.args = {
  src: "https://media-exp1.licdn.com/dms/image/C4D0BAQFLpKFEe7QtCw/company-logo_200_200/0/1581524839346?e=2159024400&v=beta&t=fSMcml5OZxVh3WFydixzH6-sirU91ZNS9SDh6Oq2Q9s",
};
