import React from 'react';
import Map from '../components/KakaoMap.jsx';

export default function Main() {
  return (
    <div className="App">
      <h1>🚗Car Zip🏠의 메인 페이지</h1>
      <Map la="37.6427246" lo="126.9779692" />
    </div>
  );
}
