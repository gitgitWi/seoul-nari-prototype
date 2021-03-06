import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-width: 700px;
  height: 100px;
  margin: 20px 0;

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
  width: 100px;
  height: 100px;
  margin:0;
  left: 0;

  background-image: url("${props =>
    props.imgUrl.length
      ? props.imgUrl
      : "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"}");
  background-size: cover;
  border-radius: 15px 0 0 15px;
`;

const StyledNariInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 100px);
`;

const StyledNariTitle = styled.div`
  width: 100%;
  height: 40%;
  padding: 10px 0;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.7rem;
  text-align: center;
  color: rgb(88, 53, 94);
`;

const StyledNariDetail = styled.div`
  display: flex;
  justify-content: space-around;
  height: 60%;
`;

const StyledNariAddr = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgb(50, 48, 49);
`;

const StyledNariCost = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgb(50, 48, 49);
`;

export default function NariItem({ data }) {
  const { shopName, shopAddr, cost, headCount, imgUrl } = data;
  return (
    <StyledItem>
      <StyledNariImg imgUrl={imgUrl} />
      <StyledNariInfo>
        <StyledNariTitle>{shopName}</StyledNariTitle>
        <StyledNariDetail>
          <StyledNariCost>
            1인당 {(cost / headCount).toLocaleString()} 원
          </StyledNariCost>
          <StyledNariAddr>{shopAddr}</StyledNariAddr>
        </StyledNariDetail>
      </StyledNariInfo>
    </StyledItem>
  );
}
