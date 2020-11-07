import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AddNariForm from "./AddNariForm";

const StyledAddNariBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const StyledGoHomeButton = styled.button`
  position: fixed;
  left: 10px;

  border: 0;
  background-color: transparent;

  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: rgb(88, 53, 94);

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const StyledAddTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: rgb(8, 76, 97);

  &:before {
    content: "신규 나리 추가";
  }
`;

export default function AddNari() {
  return (
    <StyledAddNariBody>
      <StyledLink to="/">
        <StyledGoHomeButton>Seoul Nari</StyledGoHomeButton>
      </StyledLink>
      <StyledAddTitle />
      <AddNariForm />
    </StyledAddNariBody>
  );
}
