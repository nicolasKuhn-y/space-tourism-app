import React from "react";
import { CenterContainer, Circle } from "./styles";

export const Loader = () => {
  return (
    <CenterContainer>
      <Circle duration="500" />
      <Circle duration="600" />
      <Circle duration="700" />
    </CenterContainer>
  );
};