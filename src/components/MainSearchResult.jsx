import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NariItem from "./NariItem.jsx";

const StyledResultBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 80px;
  width: 100vw;
  min-width: 200px;
  max-width: 700px;
  height: 600px;
  overflow: auto;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  text-decoration: none;
`;

export default function MainSearchResult({ results }) {
  return (
    <StyledResultBody>
      {results.map(ele => (
        <StyledLink to={`/detail/${ele.id}`} key={ele.id}>
          <NariItem data={ele.contents} />
        </StyledLink>
      ))}
    </StyledResultBody>
  );
}
