import styled from 'styled-components';
import { RecommendTag } from '../../../public/assets/images';
import theme from './../../styles/theme';

export default function ReviewBox() {
  return (
    <ReviewWrapper>
      <ReviewInfo>
        <RecommendTag />
        <p className="reviewDate">2023년 3월 13일</p>
      </ReviewInfo>
      <ReviewContent>주차면이 넓어서 좋아요. 자동화기계가 잘되어있어요.</ReviewContent>
    </ReviewWrapper>
  );
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
