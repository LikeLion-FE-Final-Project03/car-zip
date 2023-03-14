import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Header from './Header';
import InfoTables from './InfoTables';
import InfoZip from './InfoZip';
import RecentUpdate from './RecentUpdate';
import Review from './Review';

export default function ZipDetail() {
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
