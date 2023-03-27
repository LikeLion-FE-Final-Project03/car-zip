import styled from 'styled-components';
import theme from '../../styles/theme';
import DetailReview from '../Review/DetailReview';

export default function Review({ zipcode }) {
  return (
    <ReviewWrapper>
      <div className="title">
        <h3>리뷰</h3>
        <div zipcode={zipcode} className="write-review">
          리뷰작성 버튼
        </div>
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
