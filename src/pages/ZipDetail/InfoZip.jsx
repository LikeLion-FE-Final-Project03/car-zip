import styled from 'styled-components';
import theme from '../../styles/theme';
import icon_favorite from '../../../public/assets/icons/icon-favorite.svg';

export default function InfoZip() {
  return (
    <InfoZipWrapper>
      <Title>
        <h2>마포 공영주차장</h2>
        <button type="button">즐겨찾기 추가</button>
      </Title>
      <Tags>
        <span>공영</span>
        <span>전기차 충전소</span>
        <span>화장실</span>
        <span>공휴일 무료</span>
      </Tags>
      <div>
        <span>서울 서대문구 충정로 60 10층</span>
        <button type="button">주소 복사하기</button>
      </div>
      <div>최초 10분 2,500원 / 추가 5분당 500원</div>
      <div>
        <button type="button">주차비 미리보기</button>
        <button type="button">전화</button>
        <button type="button">길안내</button>
      </div>
    </InfoZipWrapper>
  );
}

const InfoZipWrapper = styled.section`
  padding: 20px;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;

  & h2 {
    font-size: ${theme.fontSizes.display};
    color: ${theme.colors.black};
    font-weight: 700;
  }

  & button {
    width: 24px;
    height: 24px;
    border: 0;
    padding-top: 24px;
    background: url(${icon_favorite}) no-repeat center center;
    overflow: hidden;
    cursor: pointer;
  }
`;

const Tags = styled.div`
  white-space: nowrap;

  & span {
    display: inline-block;
    padding: 6px 12px;
    margin-right: 4px;
    border-radius: 999px;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.dark};
    font-size: ${theme.fontSizes.subTitle1};
  }
`;
