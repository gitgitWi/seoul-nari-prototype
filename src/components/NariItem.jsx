import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;

  width: 100%;
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
  margin-right:10px;

  background-image: url("${props => props.imgUrl}");
  background-size: cover;
  border-radius: 15px 0 0 15px;
`;

const StyledNariInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
`;

const StyledNariTitle = styled.div`
  width: 100%;
  height: 40%;
  padding: 15px;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.7rem;
  text-align: center;
  color: rgb(205, 33, 42);
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
