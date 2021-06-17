import { ImageWithVariant } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders ImageWithVariant", () => {
  mount(
    <Providers>
      <ImageWithVariant />
    </Providers>
  );
  cyGet("ImageWithVariant");
});
