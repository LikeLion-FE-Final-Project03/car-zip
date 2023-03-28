import styled from 'styled-components';
import theme from '../../styles/theme';
import DetailReview from '../Review/DetailReview';
import { useNavigate } from 'react-router';
import { register } from 'swiper/element/bundle';
register();

import { useState, useEffect } from 'react';
import { SearchRTDB } from './../getDB/ReadDB';

export default function Review({ zipcode, zipname }) {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const createReview = () => {
    navigate('/newreview', {
      state: {
        parkingNo: zipcode,
        parkingName: zipname,
      },
    });
  };

  function renderSwiperSlide(component) {
    return <swiper-slide>{component}</swiper-slide>;
  }

  // 리뷰 하나하나를 배열로 만들어서 component에 넣어주기
  // 그럴라면 리뷰 컴포넌트 자체를 배열로 만들어야 함
  // 그럴라면 리뷰에서 가져온 데이터들을 컴포넌트에 넣은 것을 배열로 반환해야함
  // 그럴라면 맞는 데이터를 골라서 배열로 가져온 다음 .map으로 컴포넌트에 넣어야 함

  return (
    <ReviewWrapper>
      <div className="title">
        <h3>리뷰</h3>
        <button
          zipcode={zipcode}
          className="write-review"
          onClick={() => {
            createReview();
          }}
        >
          리뷰작성 버튼
        </button>
      </div>
      <SwiperWrapper>
        <swiper-container>
          <swiper-slide>slide1</swiper-slide>
          <swiper-slide>slide2</swiper-slide>
          <swiper-slide>slide3</swiper-slide>
          <swiper-slide>
            <DetailReview zipcode={zipcode} zipname={zipname} />
          </swiper-slide>
        </swiper-container>
      </SwiperWrapper>
    </ReviewWrapper>
  );
}

const SwiperWrapper = styled.section`
  padding: 0 20px;
  & .swiper-slide {
    background-color: blue;
  }
`;

const ReviewWrapper = styled.section`
  padding: 20px;
  overflow: hidden;

  & .title {
    display: flex;
    justify-content: space-between;
  }

  & .write-review {
    width: 100px;
    height: 30px;
    background-color: dodgerblue;
  }

  & h3 {
    font-size: ${theme.fontSizes.subTitle2};
    margin-bottom: 12px;
    color: ${theme.colors.black};
  }
`;

const ReviewBoxWrapper = styled.ul``;
