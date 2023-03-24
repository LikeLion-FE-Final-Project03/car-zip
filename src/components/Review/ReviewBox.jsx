import styled from 'styled-components';
import { ReviewUpdateButton, ReviewDeleteButton } from '../../../public/assets/icons';
import { NotRecommendTag, RecommendTag } from '../../../public/assets/images';
import theme from './../../styles/theme';
import { db } from '../../../Firebase';
// import { db } from './../../../firebase-config';
import { doc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ReviewBox() {
  const [reviews, setReviews] = useState([]);
  //시작될 때 한번만 실행
  const navigate = useNavigate();

  const isEdit = (id) => {
    console.log('넘겨온 id: ' + id);

    const userId = id;
    navigate('/editreview', {
      state: {
        userId: id,
      },
    });

    // window.location.href = '/editreview';
  };

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getReviews = async () => {
      //db의 reviews 컬렉션 가져오기
      const reviewsCollectionRef = collection(db, 'reviews');
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
      <ReviewBoxWrapper>
        <ReviewBoxHeader>
          <ParkingLot>파킹 주차장</ParkingLot>
          <BtnWrapper>
            <ReviewUpdateButton
              className="btnUpdate"
              onClick={() => {
                isEdit(value.id);
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
    </div>
  ));

  return <>{showReviews}</>;
}

const ReviewBoxWrapper = styled.li`
  min-width: 320px;
  height: 221px;
  list-style: none;
  padding: 0;
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
