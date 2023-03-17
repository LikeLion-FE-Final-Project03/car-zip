import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import theme from '../styles/theme';
import { TextStyle } from '../styles/UsefulStyle';

import naviButton from '../../public/assets/icons/button-navi.svg';
import activeFavorite from '../../public/assets/icons/icon-active-favorite.svg';
import deactiveFavorite from '../../public/assets/icons/icon-deactive-favorite.svg';

export function ParkinglotList() {
  return (
    <ParkinglotWrapper>
      <div>
        <ParkinglotTitle>주차장 이름</ParkinglotTitle>
        <TextStyle fontsize={theme.fontSizes.paragraph2} fontweight="400" fontcolor={theme.colors.grey3}>
          공영 | 전기차 충전소 | 화장실 | 12면
        </TextStyle>
        <TextStyle fontsize={theme.fontSizes.paragraph2} fontweight="700">
          10분당 2,500원 / 추가 5분당 1,000원
        </TextStyle>
      </div>
      <ButtonStyle>
        <img src={naviButton} alt="길안내 버튼" />
      </ButtonStyle>
    </ParkinglotWrapper>
  );
}

const ParkinglotWrapper = styled.li`
  height: 117px;
  padding: 21px 19px;
  border-top: solid 1px ${theme.colors.grey};
  line-height: 24px;
  letter-spacing: -1px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ParkinglotTitle = styled.h3`
  display: inline-block;
  font-size: ${theme.fontSizes.paragraph2};
  font-weight: 700;
`;

const ButtonStyle = styled.button`
  height: 61px;
  width: 61px;
  border: none;
  background-color: transparent;
  padding: 0;
`;
