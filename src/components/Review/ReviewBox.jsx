import styled from 'styled-components';
import { RecommendTag } from '../../../public/assets/images';
import { BtnReviewUpdate, BtnReviewDelete } from '../../../public/assets/icons';
import theme from './../../styles/theme';

export default function ReviewBox() {
  return (
    <ReviewBoxWrapper>
      <ReviewBoxHeader>
        <ParkingLot>파킹 주차장</ParkingLot>
        <BtnWrapper>
          <BtnReviewUpdate className="btnUpdate" />
          <BtnReviewDelete />
        </BtnWrapper>
      </ReviewBoxHeader>
      <ReviewWrapper>
        <ReviewInfo>
          <RecommendTag />
          <p className="reviewDate">2023년 3월 13일</p>
        </ReviewInfo>
        <ReviewContent>주차면이 넓어서 좋아요. 자동화기계가 잘되어있어요.</ReviewContent>
      </ReviewWrapper>
    </ReviewBoxWrapper>
  );
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
