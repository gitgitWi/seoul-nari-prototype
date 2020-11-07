import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  position: absolute;
  top: 25vh;

  display: block;

  width: 100%;

  text-align: center;

  span {
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 6rem;
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
