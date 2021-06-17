import { UIDatePicker } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UIDatePicker", () => {
  mount(
    <Providers>
      <UIDatePicker />
    </Providers>
  );
  cyGet("UIDatePicker");
});
