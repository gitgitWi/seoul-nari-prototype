import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 90%;
  height: 60px;
  margin: 10px 0;

  background-color: rgb();

  border: 0;
  border-radius: 15px;
  box-shadow: 0 0 10px rgb(88, 53, 94);
`;

const StyledNariTitle = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.3rem;
`;

export default function NariItem({ data }) {
  return (
    <StyledItem>
      <StyledNariTitle>{data.name}</StyledNariTitle>
    </StyledItem>
  );
}
