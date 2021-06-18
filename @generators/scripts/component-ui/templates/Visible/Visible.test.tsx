import { UIVisible } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UIVisible", () => {
  mount(
    <Providers>
      <UIVisible type="desktop">
        <div>text</div>
      </UIVisible>
    </Providers>
  );
  cyGet("UIVisible");
});
