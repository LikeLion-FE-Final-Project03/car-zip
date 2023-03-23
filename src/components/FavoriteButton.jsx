import { useState } from 'react';
import styled from 'styled-components';
import icon_favorite from '../../public/assets/icons/icon-favorite.svg';
import theme from '../styles/theme';

const userData = {
  uid: 'user01',
  userName: '조정현',
  favoriteParkingLotId: ['350-4-000004', '350-4-000005', '350-4-000006'],
};

const parkingLotData = {
  prkplceNo: '205-2-000016',
  prkplceNm: '은행2동 제4',
  prkplceSe: '공영',
  prkplceType: '노외',
  rdnmadr: '경기도 성남시 중원구 순환로379번길 19',
  lnmadr: '',
  prkcmprt: '230',
  feedingSe: '1',
  enforceSe: '요일제',
  operDay: '평일+토요일+공휴일',
  weekdayOperOpenHhmm: '00:00',
  weekdayOperColseHhmm: '23:59',
  satOperOperOpenHhmm: '00:00',
  satOperCloseHhmm: '23:59',
  holidayOperOpenHhmm: '00:00',
  holidayCloseOpenHhmm: '23:59',
  parkingchrgeInfo: '유료',
  basicTime: '30',
  basicCharge: '400',
  addUnitTime: '10',
  addUnitCharge: '200',
  dayCmmtktAdjTime: '24',
  dayCmmtkt: '6000',
  monthCmmtkt: '60000',
  metpay: '신용카드',
  spcmnt: '경차, 장애인 차량 50프로 할인 등',
  institutionNm: '성남도시개발공사 노외주차처',
  phoneNumber: '',
  latitude: '37.45668625',
  longitude: '127.1721948',
  referenceDate: '2022-11-17',
};

export default function Favorite() {
  const [userFavoriteList, setUserFavoriteList] = useState(userData.favoriteParkingLotId);
  const [isFavorite, SetIsFavorite] = useState(false);

  function handleFavorite() {
    const parkingLotNo = parkingLotData.prkplceNo;
    if (userFavoriteList.includes(parkingLotNo)) {
      setUserFavoriteList(
        userFavoriteList.filter((item) => {
          return item !== parkingLotNo;
        })
      );
      SetIsFavorite(false);
      alert('즐겨찾기에서 삭제되었습니다.');
    } else {
      setUserFavoriteList([...userFavoriteList, parkingLotNo]);
      SetIsFavorite(true);
      alert('즐겨찾기에서 추가되었습니다.');
    }
  }

  return (
    <>
      <Checkbox id="favorite" type="checkbox" />
      <Label className={isFavorite && 'favorite'} htmlFor="favorite" tabIndex="0" onClick={handleFavorite}>
        즐겨찾기 추가
      </Label>
    </>
  );
}

const Checkbox = styled.input`
  display: none;
`;

const Label = styled.label`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  padding-top: 24px;
  background-color: ${theme.colors.grey};
  -webkit-mask-image: url(${icon_favorite});
  mask-image: url(${icon_favorite});
  overflow: hidden;

  &.favorite {
    background-color: ${theme.colors.yellow};
  }
`;
