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
  let currentData = props.latlngRef;
  let i = 0;

  useEffect(() => {
    currentData = props.latlngRef;
  }, [props.latlngRef]);

  while (i < currentData.length) {
    let currentnm = currentData[i].prkplceNm;
    let currentlat = currentData[i].latitude;
    let currentlng = currentData[i].longitude;

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
            <ComparechrgeInfo
              parkingchrgeInfo={currentData[i].parkingchrgeInfo}
              basicTime={currentData[i].basicTime}
              basicCharge={currentData[i].basicCharge}
            />
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

function ComparechrgeInfo(props) {
  if (props.parkingchrgeInfo == '무료') {
    return '무료';
  } else {
    return (
      <span>
        {props.parkingchrgeInfo} / {props.basicTime}분당 {props.basicCharge}원
      </span>
    );
  }
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
