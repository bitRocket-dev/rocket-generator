import { UISteps } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UISteps", () => {
  mount(
    <Providers>
      <UISteps />
    </Providers>
  );
  cyGet("UISteps");
});
