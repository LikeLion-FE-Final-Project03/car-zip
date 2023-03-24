import React, { useEffect, useInsertionEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { IcVector } from '../../public/assets/icons';
import { NotRecommendBtn, RecommendBtn, GrayRecommend, GrayNotRecommend } from '../../public/assets/images';

import theme from './../styles/theme';
import { calcRem } from './../styles/theme';

import { db } from '../../Firebase';
import { addDoc, deleteDoc, updateDoc, doc, collection, getDocs } from 'firebase/firestore';

const EditReview = ({}) => {
  //리뷰 조회 페이지에서 넘겨 받은 데이터
  const location = useLocation();
  const { userId, content, recommendVal } = location.state;

  // 리뷰 데이터 담을 변수
  const [reviews, setReviews] = useState([]);

  //리뷰에 필요한 데이터 (초기값 : 기존 추천여부)
  const [recommend, setRecommend] = useState(recommendVal);

  //리뷰 내용 수정(초기값 : 기존 리뷰 내용)
  const [newContent, setNewContent] = useState(content);

  //db의 reviews 컬렉션 가져오기
  const reviewsCollectionRef = collection(db, 'reviews');

  //기존 리뷰와 수정되는 리뷰 담는 변수
  const [state, setState] = useState(content);

  //시작될 때 한번만 실행(DB에서 데이터 가져와서 저장)
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getReviews = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(reviewsCollectionRef);
      // reviews에 data안의 자료 추가
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getReviews();
  }, []);

  const updateReview = async (id) => {
    const userDoc = doc(db, 'reviews', id);

    window.alert('리뷰를 수정하였습니다.');

    if (newContent === '') {
      await updateDoc(userDoc, { recommend: recommend });
    } else {
      await updateDoc(userDoc, {
        content: newContent,
        recommend: recommend,
      });
    }

    //리뷰 수정 이후 다시 리뷰 조회 페이지로 이동
    //예외 처리해줘야 함.
    window.location.href = '/mypage/review';
  };

  const handleChangeContent = (e) => {
    setState(e.target.value);
    setNewContent(state);
  };

  const showReviews = reviews
    .filter((value) => value.userId === userId)
    .map((value) => (
      <div key={value.id}>
        <ReviewWrapper>
          <PageHeader>
            <button aria-label="뒤로가기 버튼">
              <IcVector />
            </button>
            <PageTitle>리뷰 수정</PageTitle>
          </PageHeader>
          <ParkingNameWrapper>
            <ParkingName>파킹 주차장</ParkingName>
          </ParkingNameWrapper>

          <BtnWrapper>
            <RecommendBtnWrapper
              aria-label="추천"
              tabIndex={0}
              onClick={() => {
                setRecommend(true);
              }}
            >
              {recommend ? <RecommendBtn /> : <GrayRecommend />}
            </RecommendBtnWrapper>
            <NotRecommendBtnWrapper
              aria-label="비추천"
              tabIndex={0}
              onClick={() => {
                setRecommend(false);
              }}
            >
              {!recommend ? <NotRecommendBtn /> : <GrayNotRecommend />}
            </NotRecommendBtnWrapper>
          </BtnWrapper>
          <ReviewInput type="text" cols="30" rows="10" value={state} onChange={handleChangeContent}></ReviewInput>
          <LetterNum>{state.length}/100자</LetterNum>
          <SubmitBtn onClick={() => updateReview(value.id)}>수정하기</SubmitBtn>
        </ReviewWrapper>
      </div>
    ));

  return (
    <>
      <h2>edit</h2>
      <h2>작성자 : {userId}</h2>
      {showReviews}
    </>
  );
};

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

export default EditReview;
