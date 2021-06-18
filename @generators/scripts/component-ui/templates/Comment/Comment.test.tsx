import { UIComment } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UIComment", () => {
  mount(
    <Providers>
      <UIComment text="text" />
    </Providers>
  );
  cyGet("UIComment");
});
