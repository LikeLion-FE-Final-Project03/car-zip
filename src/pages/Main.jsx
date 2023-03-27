import Map from '../components/KakaoMap.jsx';
import SearchListPage from './Search.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ParkingLotListButton from '../components/ParkingLotListButton.jsx';
import Sidebar from '../components/Sidebar/Sidebar';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ParkingLotBottomSheet from '../components/ParkingLotBottomSheet.jsx';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchName, setSearchName] = useState('');

  function MapPage() {
    return (
      <>
        <Map SearchName={searchName} />
        <ParkingLotListButton />
      </>
    );
  }

  return (
    <div className="App">
      <SearchBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setSearchName={setSearchName} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/searchList" element={<SearchListPage />} />
      </Routes>
    </div>
  );
}
