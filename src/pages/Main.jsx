import KaKaoMap from '../components/KakaoMap.jsx';
import SearchListPage from './Search.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ParkingLotListButton from '../components/ParkingLotListButton.jsx';
import Sidebar from '../components/Sidebar/Sidebar';
import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import ParkingLotBottomSheet from '../components/ParkingLotBottomSheet.jsx';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isListOpen } from './../RecoilState/RecoilState';
import ModalPortal from '../portal/portal.js';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [listOpen, setListOpen] = useRecoilState(isListOpen);

  console.log('main.jsx 렌더링');

  return (
    <div className="App">
      <SearchBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MapPageWrapper>
        {listOpen && (
          <ModalPortal>
            <ModalPortalStyle>
              <SearchListPage setListOpen={setListOpen} />
            </ModalPortalStyle>
          </ModalPortal>
        )}
        <KaKaoMap />
        <ParkingLotListButton setListOpen={setListOpen} />
      </MapPageWrapper>
    </div>
  );
}

const MapPageWrapper = styled.div`
  position: relative;
  background-color: yellow;
`;

const ModalPortalStyle = styled.div`
  position: absolute;
  min-width: 380px;
  width: 100%;
  min-height: 100%;
  background-color: white;
  z-index: 3;
  top: 78px;
`;
