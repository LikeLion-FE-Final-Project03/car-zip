import styled from 'styled-components';
import DetailReview from '../Review/DetailReview';

export default function Review({ zipcode }) {
  return (
    <ReviewWrapper>
      <ReviewBoxWrapper>
        <DetailReview zipcode={zipcode} />
      </ReviewBoxWrapper>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section`
  padding: 20px;
  overflow: hidden;
`;

const ReviewBoxWrapper = styled.ul``;
