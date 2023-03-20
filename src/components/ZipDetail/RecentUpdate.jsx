import styled from 'styled-components';
import theme from '../../styles/theme';

export default function RecentUpdate() {
  return (
    <RecentUpdateWrapper>
      <span>최근 업데이트 날짜 - 2023년 2월 21일</span>
    </RecentUpdateWrapper>
  );
}

const RecentUpdateWrapper = styled.div`
  text-align: center;
  color: ${theme.colors.black};
`;
