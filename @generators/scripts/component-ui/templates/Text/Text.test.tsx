import { UIText } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UIText", () => {
  mount(
    <Providers>
      <UIText text="text" />
    </Providers>
  );
  cyGet("UIText");
});
