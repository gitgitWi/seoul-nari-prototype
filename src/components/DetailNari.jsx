import React from "react";
import styled from "styled-components";

const StyledDetailNari = styled.div``;

export default function DetailNari({ match }) {
  const { shopName } = match.params;
  return <StyledDetailNari>디테일 페이지 for {shopName}</StyledDetailNari>;
}
