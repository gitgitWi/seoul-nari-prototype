import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MainSearchBar from "./MainSearchBar.jsx";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;
  min-width: 200px;
  height: ${props => (props.hasResults ? "15vh" : "37vh")};
`;

const StyledTitleLink = styled(Link)`
  text-decoration: none;
`;

const StyledTitleButton = styled.button`
  display: block;

  background-color: transparent;
  border: 0;

  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  font-style: italic;
  color: rgb(250, 250, 250, 0.8);

  text-decoration: none;
  transition: 0.1s;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 335px) {
    font-size: 2rem;
  }

  @media (min-width: 336px) and (max-width: 669px) {
    font-size: 3rem;
  }
`;

export default function MainHeader({ setResults, hasResults }) {
  const onTitleClick = () => {
    setResults([]);
  };
  return (
    <StyledHeader hasResults={hasResults}>
      <StyledTitleLink to="/" onClick={onTitleClick}>
        <StyledTitleButton>Seoul Nari</StyledTitleButton>
      </StyledTitleLink>
      <MainSearchBar hasResults={hasResults} setResults={setResults} />
    </StyledHeader>
  );
}
