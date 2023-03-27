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
const targetZipNo = '221-1-000003';
const url = `http://api.data.go.kr/openapi/tn_pubr_prkplce_info_api?serviceKey=${defaultOptions.serviceKey}&pageNo=${defaultOptions.pageNo}&numOfRows=${defaultOptions.numOfRows}&type=${defaultOptions.type}&prkplceNo=${targetZipNo}`;

export default function ZipDetail() {
  const [parkingInfo, setParkingInfo] = useState({});
  const [parkingDatail, setParkingDatail] = useState({});
  const [latestUpdate, setLatestUpdate] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const data = res.response.body.items[0];
        setParkingInfo({
          name: data.prkplceNm,
          type: data.prkplceSe,
          chargeInfo: data.parkingchrgeInfo,
          count: data.prkcmprt,
          where: data.prkplceType,
          address: data.rdnmadr || data.lnmadr,
          basicTime: data.basicTime,
          basicCharge: data.basicCharge,
          addUnitTime: data.addUnitTime,
          addUnitCharge: data.addUnitCharge,
          phoneNumber: data.phoneNumber,
          latitude: data.latitude,
          longitude: data.longitude,
          parkingNo: data.prkplceNo,
        });
        setParkingDatail({
          basicTime: data.basicTime,
          basicCharge: data.basicCharge,
          addUnitTime: data.addUnitTime,
          addUnitCharge: data.addUnitCharge,
          dayCharge: data.dayCmmtkt,
          monthCharge: data.monthCmmtkt,
          weekdayOpenHhmm: data.weekdayOperOpenHhmm,
          weekdayColseHhmm: data.weekdayOperColseHhmm,
          satOpenHhmm: data.satOperOperOpenHhmm,
          satCloseHhmm: data.satOperCloseHhmm,
          holidayOpenHhmm: data.holidayOperOpenHhmm,
          holidayCloseHhmm: data.holidayCloseOpenHhmm,
          spcmnt: data.spcmnt,
        });
        setLatestUpdate({
          latestUpdate: data.referenceDate.replace(/-/g, '').replace(/(\d{4})(\d{2})(\d{2})/, '$1년 $2월 $3일'),
        });
      });
  }, []);

  return (
    <div>
      <Header title="주차장 상세보기" />
      <InfoZip info={parkingInfo} />
      <Review />
      <InfoMore info={parkingDatail} />
      <RecentUpdate info={latestUpdate} />
    </div>
  );
}
