import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MainHeader from "./MainHeader.jsx";
import MainSearchResult from "./MainSearchResult.jsx";
import MainAddButton from "./MainAddButton.jsx";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function Main() {
  const [results, setResults] = useState([]);
  return (
    <>
      <MainHeader
        hasResults={results.length > 0 ? true : false}
        setResults={setResults}
      />
      <MainSearchResult results={results} />
      <Link to="/new">
        <MainAddButton />
      </Link>
    </>
  );
}
