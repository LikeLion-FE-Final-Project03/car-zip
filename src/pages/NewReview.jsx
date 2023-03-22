import React from 'react';
import { useState, useEffect } from 'react';
import { IcVector } from '../../public/assets/icons';
import styled from 'styled-components';
import theme from './../styles/theme';
import { NotRecommendBtn, RecommendBtn } from '../../public/assets/images';
import { calcRem } from './../styles/theme';
import { db } from './../../firebase-config';
import { addDoc, deleteDoc, updateDoc, doc, collection, getDocs } from 'firebase/firestore';

export default function NewReview() {
  //리뷰에 필요한 데이터
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [content, setContent] = useState('');
  const [recommend, setRecommend] = useState('');

  const [reviews, setReviews] = useState([]);

  //db의 reviews 컬렉션 가져오기
  const reviewsCollectionRef = collection(db, 'reviews');

  //시작될 때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getReviews = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(reviewsCollectionRef);
      // reviews에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getReviews();
  }, []);

  //리뷰 작성
  const createReview = async () => {
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가함.
    await addDoc(reviewsCollectionRef, {
      name: name,
      userId: userId,
      content: content,
      date: new Date().getTime(),
      prkplceNo: '2312-023',
      recommend: recommend,
    });
    window.alert('리뷰를 등록하였습니다.');
    console.log('create Review');
  };

  //추천, 비추천 클릭시 알림 띄우기
  const handleRecommend = (recommendVal) => {
    window.alert(recommendVal ? '추천 버튼을 눌렀습니다.' : '비추천 버튼을 눌렀습니다.');

    setRecommend(recommendVal);
  };

  return (
    <ReviewWrapper>
      <PageHeader>
        <button aria-label="뒤로가기 버튼">
          <IcVector />
        </button>
        <PageTitle>리뷰 작성</PageTitle>
      </PageHeader>
      <ParkingNameWrapper>
        <ParkingName>파킹 주차장</ParkingName>
      </ParkingNameWrapper>
      <input
        type="text"
        placeholder="name..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="userId..."
        onChange={(event) => {
          setUserId(event.target.value);
        }}
      />
      <BtnWrapper>
        <RecommendBtnWrapper
          aria-label="추천"
          tabIndex={0}
          onClick={() => {
            handleRecommend(true);
          }}
        >
          <RecommendBtn />
        </RecommendBtnWrapper>
        <NotRecommendBtnWrapper
          aria-label="비추천"
          tabIndex={0}
          onClick={() => {
            handleRecommend(false);
          }}
        >
          <NotRecommendBtn />
        </NotRecommendBtnWrapper>
      </BtnWrapper>

      <ReviewInput
        type="text"
        cols="30"
        rows="10"
        placeholder="리뷰를 작성해주세요."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></ReviewInput>
      <LetterNum>{content.length}/100자</LetterNum>
      <SubmitBtn aria-label="등록하기 버튼" onClick={createReview}>
        등록하기
      </SubmitBtn>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  height: 844px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const PageHeader = styled.div`
  width: 100%;
  height: 57px;
  background-color: ${theme.colors.dark};
  display: flex;
  align-items: center;

  button {
    background-color: inherit;
    border: none;
    padding: 0;
    margin-left: 14px;
    width: 17px;
    cursor: pointer;
  }
`;

const PageTitle = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-right: 30px;
  line-height: 57px;
  font-weight: 700;
  letter-spacing: -0.56px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.subTitle2};
  user-select: none;
`;

const ParkingNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
`;

const ParkingName = styled.h2`
  font-weight: 700;
  font-size: ${calcRem(32)};
  margin: 20px;
`;

const BtnWrapper = styled.div`
  margin: 0 21px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  cursor: pointer;
`;

const RecommendBtnWrapper = styled.button`
  width: 100%;

  & svg {
    width: 95%;
  }
`;

const NotRecommendBtnWrapper = styled.button`
  width: 100%;
  & svg {
    width: 95%;
  }
`;

const ReviewInput = styled.textarea`
  box-sizing: border-box;
  width: 90%;
  height: 200px;
  background-color: ${theme.colors.lightGray};
  border-color: ${theme.colors.grey};
  border-radius: 11px;
  margin: 25px 20px 8px 20px;
  padding: 20px;
  font-size: ${theme.fontSizes.paragraph3};
  letter-spacing: -0.76px;
  line-height: 28px;
`;

const LetterNum = styled.p`
  box-sizing: border-box;
  font-style: ${theme.fontSizes.paragraph2};
  line-height: 19px;
  letter-spacing: -0.76px;
  width: 100%;
  padding-right: 10%;
  margin-bottom: 20px;
  text-align: right;
  user-select: none;
`;

const SubmitBtn = styled.button`
  /* width: 354px; */
  width: 90%;
  height: 49.75px;
  background-color: ${theme.colors.orangeMain};
  border: none;
  border-radius: 6px;
  margin: 0 18px;
  font-size: ${theme.fontSizes.subTitle2};
  font-weight: 700;
  color: ${theme.colors.white};
  line-height: 50px;
  letter-spacing: 0.31px;
  text-align: center;
  cursor: pointer;
`;
