import styled from 'styled-components';
import { NotRecommendTag, RecommendTag } from '../../../public/assets/images';
import theme from './../../styles/theme';
import { db } from '../../../Firebase';

import { doc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function DetailReview({ zipcode }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  //로그인한 유저의 uid 가져오기
  const userId = JSON.parse(localStorage.getItem('user')).user.uid;

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
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  const detailReview = reviews.filter((value) => value.prkplceNo === zipcode);

  const showReviews = () => {
    if (!loading) {
      if (detailReview.length > 0) {
        return detailReview
          .sort((a, b) => b.date - a.date)
          .map((value) => (
            <ReviewBoxWrapper key={value.id}>
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
        return <NoReview>해당 주차장에 등록된 리뷰가 없습니다.</NoReview>;
      }
    } else {
      return <ReviewLoading>작성한 리뷰 로딩 중...</ReviewLoading>;
    }
  };

  return <>{showReviews()}</>;
}

const ReviewBoxWrapper = styled.li`
  width: 100%;
  box-sizing: border-box;
  min-width: 320px;
  list-style: none;
  padding: 0;
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

const ReviewLoading = styled.h2`
  font-size: ${theme.fontSizes.subTitle1};
`;
