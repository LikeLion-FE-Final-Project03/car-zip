import React from 'react';
import { ParkinglotList } from './ParkinglotList.jsx';
import styled from 'styled-components';
import theme from '../styles/theme.js';
import UtilButton from './UtilButton.jsx';

export default function ParkingLotBottomSheet() {
  return (
    <ParkingLotBottomSheetWrapper>
      <ParkinglotList />
      <ButtonWrapper>
        <UtilButton type="button" icon="public/assets/icons/icon-call.svg" width="48" theme="dark">
          전화
        </UtilButton>
        <UtilButton type="button" icon="public/assets/icons/icon-navi.svg" width="48" theme="default">
          길안내
        </UtilButton>
      </ButtonWrapper>
    </ParkingLotBottomSheetWrapper>
  );
}

const ParkingLotBottomSheetWrapper = styled.div`
  z-index: 12;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${theme.calcRem(197)};
  background-color: ${theme.colors.white};
`;

const ButtonWrapper = styled.div`
  padding: 0 ${theme.calcRem(20)};
  display: flex;
  justify-content: space-between;
`;
