import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  position: absolute;
  top: 32vh;
  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70vw;
  max-width: 900px;
  height: 3.5rem;

  margin: 15px;
  box-shadow: 0px 0px 10px rgb(88, 53, 94);
  border-radius: 15px;

  background-color: rgb(255, 248, 240);

  &:before {
    width: 35px;
    padding: 0px 10px;
    border-right: 1px solid rgb(88, 53, 94);

    text-align: center;
    content: "🔍";
  }
`;

const StyledSearchInput = styled.input.attrs({
  placeholder: "나리 맛집 검색, 렛츠기릿~"
})`
  width: 100%;
  height: 2rem;

  border: 0;

  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  font-style: italic;
  color: rgb(255, 248, 240);

  background-color: transparent;

  &:hover {
    cursor: grab;
  }

  &:focus {
    outline: none;
  }
`;

export default function MainSearchBar() {
  return (
    <StyledSearchBar>
      <StyledSearchInput />
    </StyledSearchBar>
  );
}
