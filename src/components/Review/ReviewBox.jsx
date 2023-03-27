import styled from 'styled-components';
import { ReviewUpdateButton, ReviewDeleteButton } from '../../../public/assets/icons';
import { NotRecommendTag, RecommendTag } from '../../../public/assets/images';
import theme from './../../styles/theme';
import { db } from '../../../Firebase';

import { doc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
export default function ReviewBox() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  //로그인한 유저의 uid 가져오기
  const userId = JSON.parse(localStorage.getItem('user')).user.uid;

  const isEdit = (id, userId, reviewContent, recommendVal) => {
    console.log('넘겨온 userId: ' + userId);
    console.log('넘겨온 id: ' + id);
    console.log('넘겨온 content: ' + reviewContent);
    console.log('넘겨온 추천 여부: ' + recommendVal);
    const content = reviewContent;
    const recommend = recommendVal;
    navigate('/editreview', {
      state: {
        id: id,
        userId: userId,
        content: content,
        recommendVal: recommend,
      },
    });
  };

  //[사이드이펙트] DB -> 리뷰 요청/응답
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getReviews = async () => {
      try {
        //db의 reviews 컬렉션 가져오기
        const reviewsCollectionRef = collection(db, 'reviews');
        // getDocs로 컬렉션안에 데이터 가져오기
        const data = await getDocs(reviewsCollectionRef);
        // reviews에 data안의 자료 추가. 객체에 id 덮어씌우는거
        setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } finally {
        //리뷰를 모두 받은 경우, 로딩 상태 false로 변경
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  //리뷰 데이터(reviews)에서 로그인한 유저가 작성한 리뷰만 가져와서
  //userReview에 저장
  const userReview = reviews.filter((value) => value.userId === userId);

  const deleteReview = async (id, name) => {
    const reviewsDoc = doc(db, 'reviews', id);

    if (window.confirm(`${name}님의 데이터를 삭제하시겠습니까?`)) {
      await deleteDoc(reviewsDoc);
    }

    //리뷰 삭제 시 리뷰 조회 페이지 리렌더링
    window.location.href = '/mypage/review';
  };

  // console.log(userReview.length);

  const showReviews = () => {
    if (loading) {
      return <ReviewRoading>작성한 리뷰 로딩 중...</ReviewRoading>;
    } else {
      if (reviews.filter((value) => value.userId === userId).length > 0) {
        return userReview
          .sort((a, b) => b.date - a.date)
          .map((value) => (
            <ReviewBoxWrapper key={value.id}>
              <ReviewBoxHeader>
                <ParkingLot>파킹 주차장</ParkingLot>
                <BtnWrapper>
                  <ReviewUpdateButton
                    className="btnUpdate"
                    onClick={() => {
                      isEdit(value.id, value.userId, value.content, value.recommend);
                    }}
                  />
                  <ReviewDeleteButton
                    onClick={() => {
                      deleteReview(value.id, value.name);
                    }}
                  />
                </BtnWrapper>
              </ReviewBoxHeader>
              <ReviewWrapper>
                <ReviewInfo>
                  {value.recommend ? <RecommendTag /> : <NotRecommendTag />}
                  <p className="reviewDate">{new Date(value.date).toLocaleString()} </p>
                </ReviewInfo>
                <ReviewContent>{value.content}</ReviewContent>
              </ReviewWrapper>
            </ReviewBoxWrapper>
          ));
      } else {
        return <NoReview>작성한 리뷰가 없습니다.</NoReview>;
      }
    }
  };

  return <>{showReviews()}</>;
}

const ReviewBoxWrapper = styled.li`
  width: 100%;
  box-sizing: border-box;
  min-width: 320px;
  height: 221px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.orangeMain};
`;

const ReviewBoxHeader = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const ParkingLot = styled.p`
  font-weight: 700;
  font-size: ${theme.fontSizes.subTitle2};
  line-height: 28.64px;
  letter-spacing: -0.65px;
  color: ${theme.colors.dark};
`;

const BtnWrapper = styled.div`
  .btnUpdate {
    margin-right: 4px;
  }
`;

const ReviewWrapper = styled.div`
  box-sizing: border-box;
  min-width: 280px;
  height: 150px;
  background-color: ${theme.colors.lightGray};
  border: 1px solid ${theme.colors.grey};
  border-radius: 10px;
  padding: 20px 16px;
  letter-spacing: -0.65px;
  font-weight: 400;
  overflow: scroll;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: ${theme.colors.dark};
`;

const ReviewContent = styled.p`
  color: ${theme.colors.black};
  line-height: 24px;
`;

const NoReview = styled.h2`
  font-size: ${theme.fontSizes.subTitle1};
`;

const ReviewRoading = styled.h2`
  font-size: ${theme.fontSizes.subTitle1};
`;
