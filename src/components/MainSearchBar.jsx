import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 60vw;
  max-width: 900px;
  height: 3.5rem;
  background-color: rgb(255, 209, 102);
`;

const StyledSearchIcon = styled.div`
  width: 35px;
`;

const StyledSearchInput = styled.input.attrs({
  placeholder: "나리 맛집 검색, 렛츠기릿~"
})`
  width: 100%;
`;

export default function StyledSearchBar() {
  return (
    <StyledSearchBar>
      <StyledSearchIcon />
      <StyledSearchInput />
    </StyledSearchBar>
  );
}
