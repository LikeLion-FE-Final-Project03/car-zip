import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { IcVector } from '../../public/assets/icons';
import { NotRecommendBtn, RecommendBtn, GrayRecommend, GrayNotRecommend } from '../../public/assets/images';

import theme from './../styles/theme';
import { calcRem } from './../styles/theme';

import { db } from '../../Firebase';
import { addDoc, deleteDoc, updateDoc, doc, collection, getDocs } from 'firebase/firestore';

import { useLocation } from 'react-router';

import { SearchRTDB } from './../components/getDB/ReadDB';

export default function NewReview() {
  //상세페이지에서 넘겨 받은 주차장 코드
  const location = useLocation();
  const { parkingNo, parkingName } = location.state;

  //RTDB 데이터를 담기
  const [data, setData] = useState([]);

  // 리뷰 데이터 담을 변수
  const [reviews, setReviews] = useState([]);

  // 리뷰 작성 시 필수 입력값
  const [content, setContent] = useState('');
  const [recommend, setRecommend] = useState(false);

  //유효성 검사
  //버튼 선택했는지 확인
  const [selectedRecommend, setSelectedRecommend] = useState(false);
  //글자수 조건에 맞지 않을 때 focus 주기
  const contentInput = useRef();

  //db의 reviews 컬렉션 가져오기
  const reviewsCollectionRef = collection(db, 'reviews');

  //로그인한 유저 정보
  const userName = JSON.parse(localStorage.getItem('user')).user.displayName;
  const userId = JSON.parse(localStorage.getItem('user')).user.uid;

  //주차장명 저장

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
    //유효성 검사 먼저
    if (!selectedRecommend) {
      alert('추천과 비추천 버튼 중 하나를 선택해주세요.');
      return;
    }

    if (content.length < 5) {
      alert('리뷰는 최소 5글자 이상 입력해주세요.');
      contentInput.current.focus();
      return;
    }

    if (content.length > 200) {
      alert('리뷰는 200자 이하로 작성해주세요.');
      contentInput.current.focus();
      return;
    }

    //DB에 저장하기
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가함.
    await addDoc(reviewsCollectionRef, {
      name: userName,
      userId: userId,
      content: content,
      date: new Date().getTime(),
      prkplceNo: parkingNo,
      recommend: recommend,
      parkingName: parkingName,
    });
    window.alert('리뷰를 등록하였습니다.');
    window.location.href = '/mypage/review';
  };

  //추천, 비추천 클릭시 알림 띄우기
  const handleRecommend = (recommendVal) => {
    setRecommend(recommendVal);
    setSelectedRecommend(true);
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
        <ParkingName>{parkingName}</ParkingName>
      </ParkingNameWrapper>
      <BtnWrapper>
        <RecommendBtnWrapper
          aria-label="추천"
          tabIndex={0}
          onClick={() => {
            handleRecommend(true);
          }}
        >
          {!selectedRecommend ? <GrayRecommend /> : recommend ? <RecommendBtn /> : <GrayRecommend />}
        </RecommendBtnWrapper>
        <NotRecommendBtnWrapper
          aria-label="비추천"
          tabIndex={0}
          onClick={() => {
            handleRecommend(false);
          }}
        >
          {!selectedRecommend ? <GrayNotRecommend /> : recommend ? <GrayNotRecommend /> : <NotRecommendBtn />}
        </NotRecommendBtnWrapper>
      </BtnWrapper>

      <ReviewInput
        type="text"
        cols="30"
        rows="10"
        placeholder="리뷰를 작성해주세요."
        ref={contentInput}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></ReviewInput>
      <LetterNum>{content.length}/200자</LetterNum>
      <SubmitBtn onClick={createReview}>등록하기</SubmitBtn>
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
  width: 90%;
  height: 49.75px;
  border: none;
  border-radius: 6px;
  margin: 0 18px;
  background-color: ${theme.colors.orangeMain};
  font-size: ${theme.fontSizes.subTitle2};
  font-weight: 700;
  color: ${theme.colors.white};
  line-height: 50px;
  letter-spacing: 0.31px;
  text-align: center;
  cursor: pointer;
`;
