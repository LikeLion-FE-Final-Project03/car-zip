import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme.js';
import UtilButton from './UtilButton.jsx';
import FavoriteButton from '../components/FavoriteButton.jsx';

export default function ParkingLotBottomSheet(props) {
  return (
    <ParkingLotBottomSheetWrapper className={`ParkingLotBottomSheet ${props.show ? 'show' : ''}`}>
      <ParkingLotInfoWrapper>
        <BottomSheetTitle>
          <ParkingLotTitle>{props.selectedParkingLot.title}</ParkingLotTitle>
          <FavoriteButton />
        </BottomSheetTitle>
        <ParkingLotInfo>{props.selectedParkingLot.prkplceSe} | 전기차 충전소 | 화장실 | 12면</ParkingLotInfo>
        <ParkingFeeInfo>
          {props.selectedParkingLot.basicTime}분당 {props.selectedParkingLot.fee}원
        </ParkingFeeInfo>
      </ParkingLotInfoWrapper>
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
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${theme.calcRem(197)};
  background-color: ${theme.colors.white};
  transition: transform 0.3s ease-in-out;
  transform: translateY(100%); /* bottom sheet 숨기기 */
  z-index: 12;

  &.show {
    transform: translateY(0%); /* bottom sheet 보이기 */
  }
`;

const ParkingLotInfoWrapper = styled.div`
  padding: 20px;
  border-top: solid 1px ${theme.colors.grey};
  line-height: 25px;
`;

const BottomSheetTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const ParkingLotTitle = styled.h3`
  font-size: ${theme.fontSizes.subTitle2};
  font-weight: 700;
  color: ${theme.colors.dark};
  margin-right: 6px;
`;

const ParkingLotInfo = styled.div`
  font-size: ${theme.fontSizes.paragraph2};
  font-weight: 400;
  color: ${theme.colors.grey3};
`;

const ParkingFeeInfo = styled.div`
  font-size: ${theme.fontSizes.subTitle1};
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  padding: 0 ${theme.calcRem(20)};
  display: flex;
  justify-content: space-between;
`;
