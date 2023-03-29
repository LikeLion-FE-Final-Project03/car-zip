import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import theme from '../styles/theme';
import { TextStyle } from '../styles/UsefulStyle';

import { NaviButtonImg, ActiveFavorite, DeactiveFavorite } from '../../public/assets/icons';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

export function ParkinglotList(props) {
  const [state, setState] = useState('focus');
  let lists = [];
  let currentData = props.latlngRef.current;
  let i = 0;

  useEffect(() => {
    currentData = props.latlngRef.current;
    console.log(currentData, '유즈이펙 안안');
  }, [props.latlngRef.current]);

  while (i < currentData.length) {
    let currentnm = currentData[i].prkplceNm;
    let currentlat = currentData[i].latitude;
    let currentlng = currentData[i].longitude;

    console.log(currentData[i].prkplceNo, '요기요');
    console.log(currentData[i], 'here11');
    lists.push(
      <ParkinglotWrapper key={i}>
        <div>
          <Link to="/detail" state={currentData[i]}>
            <ParkinglotTitle>{currentData[i].prkplceNm}</ParkinglotTitle>
          </Link>
          <FavoriteButton parkingNo={currentData[i].prkplceNo}>즐겨찾기 추가</FavoriteButton>
          <TextStyle fontsize={theme.fontSizes.paragraph2} fontweight="400" fontcolor={theme.colors.grey3}>
            {currentData[i].prkplceSe}
          </TextStyle>
          <TextStyle fontsize={theme.fontSizes.paragraph2} fontweight="700">
            {currentData[i].parkingchrgeInfo} | {currentData[i].basicTime}분당 / {currentData[i].basicCharge}원
          </TextStyle>
        </div>
        <a href={'https://map.kakao.com/link/to/' + currentnm + ',' + currentlat + ',' + currentlng}>
          <NavibuttonStyle>
            <NaviButtonImg />
          </NavibuttonStyle>
        </a>
      </ParkinglotWrapper>
    );

    i++;
  }

  return <div> {lists} </div>;
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
