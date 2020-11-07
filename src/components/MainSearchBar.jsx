import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import search from "../db/searchService";

const StyledSearchBar = styled.form.attrs({
  method: "GET",
  action: "#"
})`
  position: absolute;
  top: ${props => (props.hasResults ? "12vh" : "30vh")};
  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70vw;
  min-width: 200px;
  max-width: 700px;
  height: 3.5rem;

  margin: 15px;
  box-shadow: 0px 0px 13px rgb(88, 53, 94);
  border-radius: 15px;

  background-color: rgb(255, 248, 240);
`;

const StyledIcon = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  id: "Capa_1",
  viewBox: "0 0 373.12 373.12"
})`
  width: 20px;
  margin-left: 15px;

  path {
    fill: rgb(88, 53, 94);
  }
`;

const StyledSearchInput = styled.input.attrs({
  placeholder: "나리 맛집 검색, 렛츠기릿~"
})`
  width: 100%;
  height: 2rem;

  border: 0;

  font-family: "Noto Sans KR", sans-serif;
  font-style: italic;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: rgb(88, 53, 94);

  background-color: transparent;

  &:hover {
    cursor: grab;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 335px) {
    font-size: 0.6rem;
  }

  @media (min-width: 336px) and (max-width: 669px) {
    font-size: 1rem;
  }
`;

export default function MainSearchBar({ hasResults, setResults }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  const onInputTextChange = e => {
    const {
      target: { value: text }
    } = e;

    setInputText(text);
  };

  const onSearchSubmit = async e => {
    e.preventDefault();
    if (inputText.length === 0) {
      alert("검색어가 입력되지 않았네여..");
      return;
    }
    history.pushState(
      { search: inputText },
      `${inputText} 검색 결과`,
      `/search/${inputText}`
    );
    setInputText("");
    const results = await search.search(inputText);
    if (results.length > 0) {
      setResults(results);
    }
  };

  return (
    <StyledSearchBar hasResults={hasResults} onSubmit={onSearchSubmit}>
      <StyledIcon>
        <g>
          <path d="M266.667,234.667h-16.96l-5.867-5.867c20.907-24.213,33.493-55.68,33.493-90.133C277.333,62.08,215.253,0,138.667,0    S0,62.08,0,138.667s62.08,138.667,138.667,138.667c34.453,0,65.92-12.587,90.133-33.387l5.867,5.867v16.853L341.333,373.12    l31.787-31.787L266.667,234.667z M138.667,234.667c-53.013,0-96-42.987-96-96c0-53.013,42.987-96,96-96c53.013,0,96,42.987,96,96    C234.667,191.68,191.68,234.667,138.667,234.667z" />
        </g>
      </StyledIcon>
      <StyledSearchInput
        value={inputText}
        onChange={onInputTextChange}
        ref={inputRef}
      />
    </StyledSearchBar>
  );
}
