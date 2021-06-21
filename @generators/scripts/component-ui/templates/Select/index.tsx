/** @format */

import { FC } from "react";
import { UIText } from "../Text";
import { Select } from "./partials/Select";

export interface TOption {
  name: string;
  value: number;
}

export interface Props {
  options: TOption[];
  selected?: number | null;
  onChange: (selected: number) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  isRequired?: boolean;
  dataCy?: string;
}

export const UISelect: FC<Props> = ({
  options,
  selected,
  onChange,
  placeholder = "Select",
  disabled,
  label,
  isRequired,
  dataCy = "UISelect",
}): JSX.Element => {
  const selectLabel = isRequired ? `${label}*` : label;
  const renderOption = (option: TOption): JSX.Element => (
    <option key={option.value} value={option.value}>
      {option.name}
    </option>
  );

  return (
    <div data-cy={dataCy}>
      {selectLabel && <UIText text={selectLabel} variant="title" />}
      <Select
        onChange={(event): void => onChange(parseInt(event.target.value))}
        disabled={disabled}
        value={selected ? selected : "0"}
        data-cy={dataCy}
      >
        <option value="0" disabled>
          {placeholder}
        </option>
        {options.map(renderOption)}
      </Select>
    </div>
  );
};
