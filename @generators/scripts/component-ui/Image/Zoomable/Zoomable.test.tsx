import { ImageZoomable } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders ImageZoomable", () => {
  mount(
    <Providers>
      <ImageZoomable />
    </Providers>
  );
  cyGet("ImageZoomable");
});
