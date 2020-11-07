import React from "React";
import styled from "styled-components";

const StyledAddButton = styled.button`
  position: sticky;
  z-index: 3;

  width: 30px;
  height: 30px;

  border-radius: 90%;
  background-color: rgb(8, 76, 97);
`;

export default function MainAddButton() {
  const onButtonClick = e => {
    // TODO
  };
  return <StyledAddButton onClick={onButtonClick}>+</StyledAddButton>;
}
