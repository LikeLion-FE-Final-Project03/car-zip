import styled from 'styled-components';
import theme from '../../styles/theme';
import icon_marker from '../../../public/assets/icons/icon-marker.svg';
import FavoriteButton from '../../components/FavoriteButton';
import CopyButton from '../../components/CopyButton';
import TagItem from '../../components/TagItem';

export default function InfoZip() {
  return (
    <InfoZipWrapper>
      <Title>
        <h2>마포 공영주차장</h2>
        <FavoriteButton type="button">즐겨찾기 추가</FavoriteButton>
      </Title>
      <TagWrapper>
        <TagItem text={'공영'} />
        <TagItem text={'전기차 충전소'} />
        <TagItem text={'화장실'} />
        <TagItem text={'공휴일 무료'} />
      </TagWrapper>
      <Address>
        <span>서울 서대문구 충정로 60 10층</span>
        <CopyButton type="button">주소 복사하기</CopyButton>
      </Address>
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
`;

const TagWrapper = styled.div`
  white-space: nowrap;
  margin-bottom: 16px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-right: 4px;
    font-size: ${theme.fontSizes.paragraph2};
  }

  & span::before {
    content: '';
    display: inline-block;
    width: 17px;
    height: 24px;
    margin-right: 4px;
    background: url(${icon_marker}) no-repeat center center;
    vertical-align: middle;
  }
`;
