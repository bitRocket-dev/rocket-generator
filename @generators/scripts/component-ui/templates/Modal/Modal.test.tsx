import { UIModal } from ".";
import { mount } from "@cypress/react";
import { cyGet } from "../../../cypress/support/commands";
import { Providers } from "../Providers";

it("renders UIModal", () => {
  mount(
    <Providers>
      <UIModal isOpen onClose={() => {}}>
        <div>UIModal</div>
      </UIModal>
    </Providers>
  );
  cyGet("UIModal");
});
