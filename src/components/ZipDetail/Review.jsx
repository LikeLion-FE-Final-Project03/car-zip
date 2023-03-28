import styled from 'styled-components';
import theme from '../../styles/theme';
import DetailReview from '../Review/DetailReview';
import { WriteBtn } from '../../../public/assets/images';
import { useNavigate } from 'react-router';

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
          <WriteBtn />
        </button>
      </div>
      <ReviewBoxWrapper>
        <DetailReview zipcode={zipcode} zipname={zipname} />
      </ReviewBoxWrapper>
    </ReviewWrapper>
  );
}

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
  }

  & h3 {
    font-size: ${theme.fontSizes.subTitle2};
    margin-bottom: 12px;
    color: ${theme.colors.black};
  }
`;

const ReviewBoxWrapper = styled.ul``;
