import React from "react";
import styled from "styled-components";

import MainTitle from "./components/MainTitle.jsx";

const StyledBody = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <StyledBody>
      <MainTitle />
    </StyledBody>
  );
}
