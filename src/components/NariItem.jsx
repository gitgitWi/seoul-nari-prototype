import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;

  width: 100%;
  height: 100px;
  margin: 10px 0;

  background-color: rgba(252, 252, 252, 0.3);

  border: 0;
  border-radius: 15px;
  box-shadow: 0 0 10px rgb(88, 53, 94);

  transition: 0.05s;

  &:hover {
    cursor: pointer;
    background-color: rgba(252, 252, 252, 0.6);
  }
`;

const StyledNariImg = styled.div`
  width: 20%;
  background-color: black;
`;

const StyledNariInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const StyledNariTitle = styled.div`
  width: 100%;
  height: 40%;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.7rem;
  text-align: center;
`;

const StyledNariDetail = styled.div`
height: 60%
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
`;

const StyledNariGo = styled.div`
  width: 20%;
  background-color: grey;
`;

export default function NariItem({ data }) {
  return (
    <StyledItem>
      <StyledNariImg />
      <StyledNariInfo>
        <StyledNariTitle>{data.name}</StyledNariTitle>
        <StyledNariDetail>details..</StyledNariDetail>
      </StyledNariInfo>
      <StyledNariGo />
    </StyledItem>
  );
}
