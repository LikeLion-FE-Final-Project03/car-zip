import styled from 'styled-components';
import DetailReview from '../Review/DetailReview';

export default function Review() {
  return (
    <ReviewWrapper>
      <ReviewBoxWrapper>
        <DetailReview />
      </ReviewBoxWrapper>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section`
  padding: 20px;
  overflow: hidden;
`;

const ReviewBoxWrapper = styled.ul``;
