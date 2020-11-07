import React from "react";
import styled from "styled-components";

import MainSearchBar from "./MainSearchBar.jsx";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 37vh;
`;

const StyledTitle = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  font-style: italic;
  color: rgb(88, 53, 94);

  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

export default function MainHeader() {
  return (
    <StyledHeader>
      <StyledTitle>Seoul Nari</StyledTitle>
      <MainSearchBar />
    </StyledHeader>
  );
}
