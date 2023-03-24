import { async } from '@firebase/util';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../Firebase';
import icon_favorite from '../../public/assets/icons/icon-favorite.svg';
import theme from '../styles/theme';

export default function Favorite({ parkingNo }) {
  const userInfo = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    function setFavoriteList() {
      setDoc(
        doc(db, 'favorites', userInfo.user.uid),
        {
          uid: userInfo.user.uid,
          name: userInfo.user.displayName,
          favoriteList: [],
        },
        { capital: true },
        { merge: true }
      );
    }
    setFavoriteList();
  }, []);

  const [isFavorite, SetIsFavorite] = useState(false);

  async function handleFavorite() {
    const favoriteRef = await getDoc(doc(db, 'favorites', userInfo.user.uid));
    if (!favoriteRef.data().favoriteList.length) {
      updateDoc(doc(db, 'favorites', userInfo.user.uid), {
        favoriteList: arrayUnion(parkingNo),
      });
      SetIsFavorite(true);
      alert('즐겨찾기에 추가되었습니다.');
    } else {
      updateDoc(doc(db, 'favorites', userInfo.user.uid), {
        favoriteList: arrayRemove(parkingNo),
      });
      SetIsFavorite(false);
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

  &.favorite {
    background-color: ${theme.colors.yellow};
  }
`;
