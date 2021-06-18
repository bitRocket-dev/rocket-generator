import { UIImage } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders UIImage", () => {
  mount(
    <Providers>
      <UIImage src="" />
    </Providers>
  );
  cyGet("UIImage");
});
