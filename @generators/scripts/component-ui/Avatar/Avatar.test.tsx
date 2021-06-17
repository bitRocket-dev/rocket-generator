import { UIAvatar } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UIAvatar", () => {
  mount(
    <Providers>
      <UIAvatar username="" borderColor="light" />
    </Providers>
  );
  cyGet("UIAvatar");
});
