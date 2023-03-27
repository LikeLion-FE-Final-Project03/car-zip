import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import theme from '../styles/theme';
import { TextStyle } from '../styles/UsefulStyle';

import { NaviButtonImg, ActiveFavorite, DeactiveFavorite } from '../../public/assets/icons';

export function ParkinglotList(props) {
  const [state, setState] = useState('focus');

  return (
    <ParkinglotWrapper>
      <div>
        <ParkinglotTitle>{props.prkplceNm}</ParkinglotTitle>
        <BookmarkButtonStyle>
          <ActiveFavorite />
          <DeactiveFavorite />
        </BookmarkButtonStyle>
        <TextStyle fontsize={theme.fontSizes.paragraph2} fontweight="400" fontcolor={theme.colors.grey3}>
          공영 | 전기차 충전소 | 화장실 | 12면
        </TextStyle>
        <TextStyle fontsize={theme.fontSizes.paragraph2} fontweight="700">
          10분당 2,500원 / 추가 5분당 1,000원
        </TextStyle>
      </div>
      <a href="https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212">
        <NavibuttonStyle>
          <NaviButtonImg />
        </NavibuttonStyle>
      </a>
    </ParkinglotWrapper>
  );
}

const ParkinglotWrapper = styled.li`
  padding: 20px;
  border-top: solid 1px ${theme.colors.grey};
  line-height: 24px;
  letter-spacing: -1px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ParkinglotTitle = styled.h3`
  display: inline-block;
  font-size: ${theme.fontSizes.paragraph2};
  font-weight: 700;
  margin-right: 4px;
`;

const NavibuttonStyle = styled.button`
  height: 61px;
  width: 61px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

const BookmarkButtonStyle = styled.button`
  border: none;
  background-color: transparent;
`;
