import { UISwitch } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UISwitch", () => {
  mount(
    <Providers>
      <UISwitch isChecked />
    </Providers>
  );
  cyGet("UISwitch");
});
