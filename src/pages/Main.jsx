import Map from '../components/KakaoMap.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ParkingLotListButton from '../components/ParkingLotListButton.jsx';
import Sidebar from '../components/Sidebar/Sidebar';
import React, { useState } from 'react';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <SearchBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Map la="37.498095" lo="127.027610" />
      <ParkingLotListButton />
    </div>
  );
}
