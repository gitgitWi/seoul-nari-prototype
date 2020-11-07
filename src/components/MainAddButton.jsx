import React from "react";
import styled from "styled-components";

const StyledAddButton = styled.button`
  position: fixed;
  z-index: 3;
  bottom: 20px;
  right: 20px;

  width: 30px;
  height: 30px;

  border: 0;
  border-radius: 50%;
  background-color: rgba(8, 76, 97, 0.4);
  color: rgb(255, 236, 209);
  transition: 0.1s;

  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(8, 76, 97, 0.8);
  }

  &:focus {
    outline: none;
  }
`;

export default function MainAddButton() {
  return <StyledAddButton>+</StyledAddButton>;
}
