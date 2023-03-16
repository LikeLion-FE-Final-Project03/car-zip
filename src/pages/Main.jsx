import React from 'react';
import styled from 'styled-components';
import Map from '../components/KakaoMap.jsx';
import theme from '../styles/theme';

const SearchBarWrapper = styled.div`
  background-color: ${theme.colors.dark};
  height: 78px;
`;

export default function Main() {
  return (
    <div className="App">
      <SearchBarWrapper />
      <Map la="37.498095" lo="127.027610" />
    </div>
  );
}
