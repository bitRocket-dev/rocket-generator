/** @format */

// #region ::: IMPORT
import { FC, memo, ChangeEvent } from "react";
import { Outer } from "./partials/Outer";
import { Input } from "./partials/Input";
import { Slider } from "./partials/Slider";

// #endregion

export interface Props {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  dataCy?: string;
}

export const UISwitch: FC<Props> = memo(
  ({ isChecked, onChange, dataCy = "UISwitch" }): JSX.Element => (
    <Outer data-cy={dataCy}>
      <Input type="checkbox" checked={isChecked} onChange={onChange} />
      <Slider isChecked={isChecked} />
    </Outer>
  )
);

UISwitch.displayName = "UISwitch";
