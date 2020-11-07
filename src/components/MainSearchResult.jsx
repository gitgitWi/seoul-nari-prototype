import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledResultBody = styled.div`
  margin-top: 80px;
`;

export default function MainSearchResult({ results }) {
  return <StyledResultBody>{results}</StyledResultBody>;
}
