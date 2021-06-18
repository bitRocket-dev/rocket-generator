import { UIImageBackground } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UIImageBackground", () => {
  mount(
    <Providers>
      <UIImageBackground srcImage="" />
    </Providers>
  );
  cyGet("UIImageBackground");
});
