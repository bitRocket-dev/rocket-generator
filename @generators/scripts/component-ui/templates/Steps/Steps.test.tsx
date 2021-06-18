import { UISteps } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UISteps", () => {
  mount(
    <Providers>
      <UISteps selected="">
        <div>UISteps</div>
        <div>UISteps2</div>
      </UISteps>
    </Providers>
  );
  cyGet("UISteps");
});
