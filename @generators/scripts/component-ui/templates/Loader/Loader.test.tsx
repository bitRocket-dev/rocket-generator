import { UILoader } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UILoader", () => {
  mount(
    <Providers>
      <UILoader />
    </Providers>
  );
  cyGet("UILoader");
});
