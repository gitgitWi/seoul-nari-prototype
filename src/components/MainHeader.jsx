import React from "react";
import styled from "styled-components";

import MainSearchBar from "./MainSearchBar.jsx";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;
  min-width: 200px;
  height: 37vh;
`;

const StyledTitle = styled.div`
  display: block;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  font-style: italic;
  color: rgb(88, 53, 94);

  @media (max-width: 335px) {
    font-size: 2rem;
  }

  @media (min-width: 336px) and (max-width: 669px) {
    font-size: 3rem;
  }
`;

export default function MainHeader(props) {
  return (
    <StyledHeader>
      <StyledTitle>Seoul Nari</StyledTitle>
      <MainSearchBar setResults={props.setResults} />
    </StyledHeader>
  );
}
