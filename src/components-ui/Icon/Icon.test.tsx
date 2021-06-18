import { UIIcon } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UIIcon", () => {
  mount(
    <Providers>
      <UIIcon icon="bank" />
    </Providers>
  );
  cyGet("UIIcon");
});
