import React from 'react';
import Header from './Header';
import InfoTables from './InfoTables';
import InfoZip from './InfoZip';
import RecentUpdate from './RecentUpdate';
import Review from './Review';
import styled from 'styled-components';

export default function ZipDetailWrapper() {
  return (
    <div>
      <Header />
      <InfoZip />
      <Review />
      <InfoTables />
      <RecentUpdate />
    </div>
  );
}

styled.div`
  background-color: #000;
`;
