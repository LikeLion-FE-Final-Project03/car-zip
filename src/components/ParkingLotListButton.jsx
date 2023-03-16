import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { IcList } from '../../public/assets/icons/index.js';

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

export default function ParkingLotListButton() {
  return (
    <ParkingLotListButton>
      <IcList />
      목록보기
    </ParkingLotListButton>
  );
}
