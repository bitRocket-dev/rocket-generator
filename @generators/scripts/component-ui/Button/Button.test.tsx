import { UIButton } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UIButton", () => {
  mount(
    <Providers>
      <UIButton />
    </Providers>
  );
  cyGet("UIButton");
});
