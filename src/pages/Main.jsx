import React from 'react';
import styled from 'styled-components';
import Map from '../components/KakaoMap.jsx';
import theme from '../styles/theme';
import { IcList, IcMenu, IcSearchBtn } from '../../public/assets/icons/index.js';

const SearchBarWrapper = styled.div`
  background-color: ${theme.colors.dark};
  height: 78px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParkingLotListButton = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.dark};
  border: 1px solid ${theme.colors.dark};
  border-radius: 999px;
  width: fit-content;
  z-index: 9999;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 35px;
  padding: 8px 14px;
  font-size: 20px;

  & > svg {
    margin-right: 8px;
  }
`;

const SearchArea = styled.div`
  background: ${theme.colors.white};
  height: 46px;
  border-radius: 6px;
  width: 100%;
  margin-left: 16px;
  padding-right: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function Main() {
  return (
    <div className="App">
      <SearchBarWrapper>
        <IcMenu />
        <SearchArea>
          <IcSearchBtn />
        </SearchArea>
      </SearchBarWrapper>
      <Map la="37.498095" lo="127.027610" />
      <ParkingLotListButton>
        <IcList />
        목록보기
      </ParkingLotListButton>
    </div>
  );
}
