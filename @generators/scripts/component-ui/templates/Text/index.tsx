/** @format */

import { FC, memo } from "react";
import { TColor } from "../@theme/maps/general/mapColors";
import { Typography } from "./partials/Typography";
import { TFontVariant } from "../@theme/maps/fonts/mapFontsSizes";
import { utilityCreatePropsByVariant } from "./utilityCreatePropsByVariant";

export interface Props {
  text: string;
  variant?: TFontVariant;
  color?: TColor;
  dataCy?: string;
  noWrap?: boolean;
  underline?: boolean;
}

export const UIText: FC<Props> = memo(
  ({
    text,
    variant = "caption",
    color = "primary",
    dataCy = "UIText",
    noWrap = true,
    underline,
  }: Props): JSX.Element => {
    const props = utilityCreatePropsByVariant(variant);

    return (
      <Typography
        text={text}
        color={color}
        dataCy={dataCy}
        noWrap={noWrap}
        {...props}
        underline={underline}
      />
    );
  }
);

UIText.displayName = "UIText";
