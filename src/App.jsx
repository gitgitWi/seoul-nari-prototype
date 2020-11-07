import React, { useState } from "react";
import styled from "styled-components";

import MainHeader from "./components/MainHeader.jsx";

import MainSearchResult from "./components/MainSearchResult.jsx";

const StyledBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  background-color: rgb(255, 209, 102);
`;

export default function App() {
  const [results, setResults] = useState([]);
  return (
    <StyledBody>
      <MainHeader setResults={setResults} />
      <MainSearchResult results={results} />
    </StyledBody>
  );
}