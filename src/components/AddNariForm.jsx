import React, { useState } from "react";
import styled from "styled-components";

import AlertIcon from "./AlertIcon";

const StyledForm = styled.form.attrs({
  method: "POST",
  action: "#"
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 480px;

  margin: 30px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(50, 48, 49);
`;

const commonStyles = `
  width: 100%;
  height: 1.5rem;
  
  padding: 0 10px;
  margin: 5px 0;

  &:hover {
    cursor: pointer;
  }
`;

const commonInputStyles = `
  width: 450px;
  height: 1.8rem;
  margin: 0 10px;
  padding: 0 15px;
  
  &:focus {
    outline: none;
  }
`;

const commonAlertStyles = `
  display: flex;
  align-items: baseline;
  padding: 0 10px;
  margin-bottom: 0.7rem;

  &:after {
    color: rgb(205, 33, 42);
    font-size: 0.7rem;
    font-style: italic;
  }
`;

const StyledLabel = styled.label.attrs({})`
  ${commonStyles}
  color: ${props => props.color || "inherit"};

  &:before {
    content: "${props => props.content}";
  }
`;
const StyledInputShopName = styled.input.attrs({
  id: "shopName",
  placeholder: "가게 이름을 1자 이상 입력해주세요"
})`
  ${commonInputStyles}
`;

const StyledShopNameAlert = styled.div`
  ${commonAlertStyles}
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};

  &:after {
    content: "1자 이상  필.수. 입력입니다";
  }
`;

const StyledInputShopAddr = styled.input.attrs({
  id: "shopAddr",
  placeholder: "도로명 주소를 입력해주세요"
})`
  ${commonInputStyles}
`;

const StyledShopAddrAlert = styled.div.attrs()`
  ${commonAlertStyles}
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  
  &:after {
    content: "1자 이상 필.수. 입력, 영문 및 특수기호는 사용할 수 없습니다";
  }
`;

const StyledEmpty = styled.div`
  ${commonStyles}
`;

const StyledInputDepName = styled.input.attrs({
  id: "depName",
  placeholder: "이 나리 가게를 방문한 부서 이름을 입력해주세요."
})`
  ${commonInputStyles}
`;

const StyledInputVisitTime = styled.input.attrs({
  id: "visitTime",
  type: "datetime-local"
})`
  ${commonInputStyles}
`;

const StyledInputCost = styled.input.attrs({
  id: "cost",
  placeholder: "총 지출 금액을 입력해주세요"
})`
  ${commonInputStyles}
`;

const StyledCostAlert = styled.div.attrs()`
  ${commonAlertStyles}
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  
  &:after {
    content: "숫.자.만 입력가능합니다.";
  }
`;

const StyledInputHeadCount = styled.input.attrs({
  id: "headCount",
  placeholder: "총 방문 인원을 입력해주세요"
})`
  ${commonInputStyles}
`;

const StyledHeadCountAlert = styled.div.attrs()`
  ${commonAlertStyles}
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  
  &:after {
    content: "숫.자.만 입력가능합니다.";
  }
`;

const StyledSubmitButton = styled.input.attrs({
  type: "submit",
  value: "작성완료!"
})`
  width: 100%;
  height: 2rem;
  margin: 15px 0;

  background-color: rgb(23, 126, 137);
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(8, 76, 97);

  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(255, 255, 255, 0.8);
`;

export default function AddForm() {
  const [shopName, setShopName] = useState("");
  const [isShopNameAlertVisible, setIsShopNameAlertVisible] = useState(false);

  const [shopAddr, setShopAddr] = useState("");
  const [isShopAddrAlertVisible, setIsShopAddrAlertVisible] = useState(false);

  const [depName, setDepName] = useState("");

  const [visitTime, setVisitTime] = useState("");

  const [cost, setCost] = useState("");
  const [isCostAlertVisible, setIsCostAlertVisible] = useState(false);

  const [headCount, setHeadCount] = useState("");
  const [isHeadCountAlertVisible, setIsHeadCountAlertVisible] = useState(false);

  const onShopNameChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    const regName = /[ㄱ-힣\w]+/;
    setShopName(value);
    regName.test(value)
      ? setIsShopNameAlertVisible(false)
      : setIsShopNameAlertVisible(true);
  };

  const onShopAddrChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    const regName = /^[ㄱ-힣]+/;
    setShopAddr(value);
    regName.test(value)
      ? setIsShopAddrAlertVisible(false)
      : setIsShopAddrAlertVisible(true);
  };

  const onDepNameChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    setDepName(value);
  };

  const onVisitTimeChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    setVisitTime(value);
  };

  const onCostChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    const regCost = /\s+/;

    setCost(value);
    regCost.test(value)
      ? setIsCostAlertVisible(false)
      : setIsCostAlertVisible(true);
  };

  const onHeadCountChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    const regHeadCount = /\s+/;

    setHeadCount(value);
    regHeadCount.test(value)
      ? setIsHeadCountAlertVisible(false)
      : setIsHeadCountAlertVisible(true);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (
      shopName &&
      !isShopNameAlertVisible &&
      shopAddr &&
      !isShopAddrAlertVisible
    ) {
      e.submit();
    } else {
      alert("필수 항목은 정확히 입력하셔야 합니다!!!");
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledLabel
        htmlFor="shopName"
        content={"나리 가게 이름"}
        color="rgb(205, 33, 42)"
      />
      <StyledInputShopName value={shopName} onChange={onShopNameChange} />
      <StyledShopNameAlert isVisible={isShopNameAlertVisible}>
        <AlertIcon />
      </StyledShopNameAlert>

      <StyledLabel
        htmlFor="shopAddr"
        content={"나리 가게 주소"}
        color="rgb(205, 33, 42)"
      />
      <StyledInputShopAddr value={shopAddr} onChange={onShopAddrChange} />
      <StyledShopAddrAlert isVisible={isShopAddrAlertVisible}>
        <AlertIcon />
      </StyledShopAddrAlert>

      <StyledLabel content={"이 아래는 선택항목입니다."} />

      <StyledLabel
        htmlFor="depName"
        content={"방문부서"}
        color="rgb(8, 76, 97)"
      />
      <StyledInputDepName value={depName} onChange={onDepNameChange} />
      <StyledEmpty />

      <StyledLabel
        htmlFor="visitTime"
        content={"방문일시"}
        color="rgb(8, 76, 97)"
      />
      <StyledInputVisitTime value={visitTime} onChange={onVisitTimeChange} />
      <StyledEmpty />

      <StyledLabel htmlFor="cost" content={"지출금액"} color="rgb(8, 76, 97)" />
      <StyledInputCost value={cost} onChange={onCostChange} />
      <StyledCostAlert isVisible={isCostAlertVisible}>
        <AlertIcon />
      </StyledCostAlert>

      <StyledLabel
        htmlFor="headCount"
        content={"방문인원"}
        color="rgb(8, 76, 97)"
      />
      <StyledInputHeadCount value={headCount} onChange={onHeadCountChange} />
      <StyledHeadCountAlert isVisible={isHeadCountAlertVisible}>
        <AlertIcon />
      </StyledHeadCountAlert>

      <StyledSubmitButton />
    </StyledForm>
  );
}
