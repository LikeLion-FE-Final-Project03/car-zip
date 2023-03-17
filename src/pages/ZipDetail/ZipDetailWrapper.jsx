import React from 'react';
import Header from './Header';
import InfoZip from './InfoZip';
import RecentUpdate from './RecentUpdate';
import Review from './Review';
import InfoMore from './InfoMore';

export default function ZipDetailWrapper() {
  return (
    <div>
      <Header />
      <InfoZip />
      <Review />
      <InfoMore />
      <RecentUpdate />
    </div>
  );
}
