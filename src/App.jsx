import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Main from "./components/Main";
import AddNari from "./components/AddNari";
import DetailNari from "./components/DetailNari";

const StyledBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  background-color: rgb(255, 209, 102);
`;

export default function App() {
  return (
    <StyledBody>
      <Route path="/" exact={true} component={Main} />
      <Route path="/new" component={AddNari} />
      <Route path="/detail/:shopName" component={DetailNari} />
    </StyledBody>
  );
}
