import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Header from './ZipDetail/Header';

export default function FeeCalculator() {
  return (
    <FeeCalculatorWrapper>
      <Header title="주차비 미리보기" />
      <ParkingTime>
        <h2>주차시간</h2>
        <form>
          <InputWrapper>
            <label htmlFor="hour">시간</label>
            <input type="number" />
            <span>시간</span>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="hour">분</label>
            <input type="number" />
            <span>분</span>
          </InputWrapper>
        </form>
      </ParkingTime>
      <ParkingFee>
        <h2>주차비</h2>
        <p>최초 10분 2,500원, 추가 5분당 1,000원</p>
      </ParkingFee>
      <ResultFee>
        <h3>예상 결제 금액</h3>
        <p>3,500원</p>
        <span>할인 감면 대상에 따라 결제 금액이 달라질 수 있으니 참고용으로만 사용하시길 바랍니다.</span>
      </ResultFee>
    </FeeCalculatorWrapper>
  );
}

const FeeCalculatorWrapper = styled.section`
  color: ${theme.colors.black};

  & section {
    margin-left: 20px;
    margin-right: 20px;
  }

  & h2 {
    margin-bottom: 20px;
    font-size: ${theme.fontSizes.subTitle2};
    font-weight: 700;
  }

  & h3 {
    margin-bottom: 10px;
    font-size: ${theme.fontSizes.title};
    font-weight: 700;
  }
`;

const ParkingTime = styled.section`
  margin: 40px 0 20px;

  & form {
    display: flex;
  }

  & label {
    ${theme.a11yHidden}
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  gap: 8px;

  &:last-child {
    padding-left: 12px;
  }

  & input {
    width: 100%;
    padding: 8px 0;
    border: 1px solid ${theme.colors.grey};
    border-radius: 4px;
    font-size: ${theme.fontSizes.paragraph2};
    color: inherit;
    text-align: center;
  }

  & span {
    font-weight: 700;
    word-break: keep-all;
  }
`;

const ParkingFee = styled.section`
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.orangeMain};
`;

const ResultFee = styled.section`
  margin-top: 20px;
  text-align: center;

  & p {
    margin-bottom: 12px;
    color: ${theme.colors.orangeMain};
    font-size: ${theme.fontSizes.headLint};
    font-weight: 700;
  }

  & span {
    color: #767676;
    line-height: 1.25;
    word-break: keep-all;
  }
`;
