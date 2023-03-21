import React from 'react';
import Map from '../components/KakaoMap.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ParkingLotListButton from '../components/ParkingLotListButton.jsx';

export default function Main() {
  return (
    <div className="App">
      <SearchBar />
      <Map la="37.498095" lo="127.027610" />
      <ParkingLotListButton />
    </div>
  );
}
