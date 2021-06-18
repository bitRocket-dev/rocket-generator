import { UITimePicker } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UITimePicker", () => {
  mount(
    <Providers>
      <UITimePicker />
    </Providers>
  );
  cyGet("UITimePicker");
});
