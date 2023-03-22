import styled from 'styled-components';
import { NotRecommendTag, RecommendTag } from '../../../public/assets/images';
import theme from './../../styles/theme';
import { db } from './../../../firebase-config';
import { doc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function ReviewBox() {
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

  const deleteReview = async (id, name) => {
    const reviewsDoc = doc(db, 'reviews', id);

    if (window.confirm(`${name}님의 데이터를 삭제하시겠습니까?`)) {
      await deleteDoc(reviewsDoc);
    }
  };

  const showReviews = reviews.map((value) => (
    <div key={value.id}>
      <ReviewWrapper>
        <ReviewInfo>
          {value.recommend ? <RecommendTag /> : <NotRecommendTag />}
          <p className="reviewDate">{new Date(value.date).toLocaleString()} </p>
        </ReviewInfo>
        <ReviewContent>{value.content}</ReviewContent>
        <button
          onClick={() => {
            deleteReview(value.id, value.name);
          }}
        >
          삭제하기
        </button>
      </ReviewWrapper>
    </div>
  ));

  return <>{showReviews}</>;
}

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
