import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NariItem from "./NariItem.jsx";

const StyledResultBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 80px;
  width: 600px;
  height: 600px;
  overflow: auto;
`;

export default function MainSearchResult({ results }) {
  useEffect(() => {}, [results]);
  return (
    <StyledResultBody>
      {results.map(ele => (
        <NariItem key={ele.id} data={ele.contents} />
      ))}
    </StyledResultBody>
  );
}
