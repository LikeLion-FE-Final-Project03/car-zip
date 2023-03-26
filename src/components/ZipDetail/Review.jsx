import styled from 'styled-components';
import DetailReview from '../Review/DetailReview';

export default function Review() {
  return (
    <ReviewWrapper>
      <DetailReview />
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section`
  padding: 20px;
  overflow: hidden;
`;
