import { InputField } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../../cypress/support/commands";
import { Providers } from "../../Providers";

it("renders InputField", () => {
  mount(
    <Providers>
      <InputField
        placeholder="placeholder"
        onChange={() => {}}
        type="text"
        value=""
        isValid
      />
    </Providers>
  );
  cyGet("InputField");
});
