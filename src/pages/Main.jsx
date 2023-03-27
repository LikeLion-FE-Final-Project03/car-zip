import Map from '../components/KakaoMap.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ParkingLotListButton from '../components/ParkingLotListButton.jsx';
import Sidebar from '../components/Sidebar/Sidebar';
import React, { useState } from 'react';
import ParkingLotBottomSheet from '../components/ParkingLotBottomSheet.jsx';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <SearchBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Map />
      <ParkingLotListButton />
    </div>
  );
}
