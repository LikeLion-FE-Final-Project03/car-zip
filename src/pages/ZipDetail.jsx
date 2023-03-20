import React from 'react';
import Header from '../components/ZipDetail/Header';
import InfoZip from '../components/ZipDetail/InfoZip';
import RecentUpdate from '../components/ZipDetail/RecentUpdate';
import Review from '../components/ZipDetail/Review';
import InfoMore from '../components/ZipDetail/InfoMore';

export default function ZipDetail() {
  return (
    <div>
      <Header title="주차장 상세보기" />
      <InfoZip />
      <Review />
      <InfoMore />
      <RecentUpdate />
    </div>
  );
}
