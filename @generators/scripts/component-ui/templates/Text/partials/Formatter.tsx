/** @format */

import { FC, memo } from "react";
import { TFontSize } from "../../@theme/maps/fonts/mapFontsSizes";
import { TColor } from "../../@theme/maps/general/mapColors";
import { TFontWeight } from "../../@theme/maps/fonts/mapFontsWeights";
import { TFontTag } from "../../@theme/maps/fonts/mapFontsTag";

interface Props {
  text?: string;
  dataCy?: string;
  size?: TFontSize;
  color?: TColor;
  weight?: TFontWeight;
  tag?: TFontTag;
  className?: string;
}

export const Formatter: FC<Props> = memo(
  ({ text, dataCy, tag: Tag = "p", className }: Props): JSX.Element => (
    <Tag className={className} data-cy={dataCy}>
      {text}
    </Tag>
  )
);
Formatter.displayName = "Formatter";
