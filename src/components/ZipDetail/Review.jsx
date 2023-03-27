import styled from 'styled-components';
import theme from '../../styles/theme';
import DetailReview from '../Review/DetailReview';
import { useNavigate } from 'react-router';

export default function Review({ zipcode }) {
  const navigate = useNavigate();

  const createReview = () => {
    navigate('/newreview', {
      state: {
        parkingNo: zipcode,
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
          리뷰작성 버튼
        </button>
      </div>
      <ReviewBoxWrapper>
        <DetailReview zipcode={zipcode} />
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
    background-color: dodgerblue;
  }

  & h3 {
    font-size: ${theme.fontSizes.subTitle2};
    margin-bottom: 12px;
    color: ${theme.colors.black};
  }
`;

const ReviewBoxWrapper = styled.ul``;
