import { UITooltip } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UITooltip", () => {
  mount(
    <Providers>
      <UITooltip />
    </Providers>
  );
  cyGet("UITooltip");
});
