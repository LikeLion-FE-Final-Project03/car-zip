import styled from 'styled-components';
import theme from '../../styles/theme';

export default function RecentUpdate({ info: { latestUpdate } }) {
  return (
    <RecentUpdateWrapper>
      <span>최근 업데이트 날짜 - {latestUpdate}</span>
    </RecentUpdateWrapper>
  );
}

const RecentUpdateWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: ${theme.colors.black};
`;
