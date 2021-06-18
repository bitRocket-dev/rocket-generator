import { ImageGeneric } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders ImageGeneric", () => {
  mount(
    <Providers>
      <ImageGeneric />
    </Providers>
  );
  cyGet("ImageGeneric");
});
