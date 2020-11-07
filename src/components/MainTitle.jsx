import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.5rem;
  background-color: rgb(255, 209, 102);

  span {
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 3rem;
    font-style: italic;
    color: rgb(88, 53, 94);
  }
`;

export default function MainTitle() {
  return (
    <StyledTitle>
      <span>Seoul Nari</span>
    </StyledTitle>
  );
}
