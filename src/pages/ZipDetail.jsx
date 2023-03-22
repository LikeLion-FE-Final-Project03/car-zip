import React, { useEffect, useState } from 'react';
import Header from '../components/ZipDetail/Header';
import InfoZip from '../components/ZipDetail/InfoZip';
import RecentUpdate from '../components/ZipDetail/RecentUpdate';
import Review from '../components/ZipDetail/Review';
import InfoMore from '../components/ZipDetail/InfoMore';
const { VITE_PARKING_INFO_API_KEY } = import.meta.env;

const defaultOptions = {
  serviceKey: VITE_PARKING_INFO_API_KEY,
  pageNo: 1,
  numOfRows: 1,
  type: 'json',
};
const targetZipNo = '350-4-000014';
const url = `http://api.data.go.kr/openapi/tn_pubr_prkplce_info_api?serviceKey=${defaultOptions.serviceKey}&pageNo=${defaultOptions.pageNo}&numOfRows=${defaultOptions.numOfRows}&type=${defaultOptions.type}&prkplceNo=${targetZipNo}`;

export default function ZipDetail() {
  const [parkingInfo, setParkingInfo] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setParkingInfo(res.response.body.items[0]);
      });
  }, []);

  return (
    <div>
      <Header title="주차장 상세보기" />
      <InfoZip info={parkingInfo} />
      <Review />
      <InfoMore info={parkingInfo} />
      <RecentUpdate info={parkingInfo} />
    </div>
  );
}
