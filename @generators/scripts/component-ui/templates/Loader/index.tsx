/** @format */

import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { TStyled } from "../@theme";

const spin = keyframes`
  from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid ${({ theme }: TStyled) => theme.colors.dark.primary};
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;

export interface Props {
  dataCy?: string;
}

export const UILoader: FC<Props> = ({ dataCy = "UILoader" }): JSX.Element => {
  return <Loader data-cy={dataCy} />;
};
