import { UIIcon } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UIIcon", () => {
  mount(
    <Providers>
      <UIIcon width="10px" height="10px" />
    </Providers>
  );
  cyGet("UIIcon");
});
