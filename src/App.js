import React from "react";
import styled from "styled-components";

import MainTitle from "./components/MainTitle.jsx";
import MainSearchBar from "./components/MainSearchBar.jsx";

const StyledBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  background-color: rgb(255, 209, 102);
`;

export default function App() {
  return (
    <StyledBody>
      <MainTitle />
      <MainSearchBar />
    </StyledBody>
  );
}
