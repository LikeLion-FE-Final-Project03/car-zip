import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../Firebase';
import icon_favorite from '../../public/assets/icons/icon-favorite.svg';
import theme from '../styles/theme';

export default function Favorite({ parkingNo }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const favoriteCollectionRef = collection(db, 'favorites');
  const favoriteDocRef = doc(db, 'favorites', userInfo.user.uid);

  async function setFavoriteButton() {
    const favoriteSnap = await getDoc(favoriteDocRef);
    const hasCurrentParkingLot = favoriteSnap.data().favoriteList.includes(parkingNo);
    if (hasCurrentParkingLot) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }
  setFavoriteButton();

  useEffect(() => {
    async function setDataFavoriteList() {
      const favoriteData = await getDocs(favoriteCollectionRef);
      const hasFavoriteList = Boolean(favoriteData.docs.filter((doc) => doc.id === userInfo.user.uid).length);
      if (hasFavoriteList) {
        return;
      } else {
        setDoc(doc(db, 'favorites', userInfo.user.uid), {
          uid: userInfo.user.uid,
          name: userInfo.user.displayName,
          favoriteList: [],
        });
      }
    }
    setDataFavoriteList();
  }, []);

  async function handleFavorite() {
    const favoriteRef = await getDoc(doc(db, 'favorites', userInfo.user.uid));
    if (!favoriteRef.data().favoriteList.includes(parkingNo)) {
      updateDoc(doc(db, 'favorites', userInfo.user.uid), {
        favoriteList: arrayUnion(parkingNo),
      });
      setIsFavorite(true);
      alert('즐겨찾기에 추가되었습니다.');
    } else {
      updateDoc(doc(db, 'favorites', userInfo.user.uid), {
        favoriteList: arrayRemove(parkingNo),
      });
      setIsFavorite(false);
      alert('즐겨찾기에서 삭제되었습니다.');
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
  cursor: pointer;

  &.favorite {
    background-color: ${theme.colors.yellow};
  }
`;
