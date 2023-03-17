import styled from 'styled-components';
import theme from '../../styles/theme';
import icon_marker from '../../../public/assets/icons/icon-marker.svg';
import icon_call from '../../../public/assets/icons/icon-call.svg';
import icon_calculator from '../../../public/assets/icons/icon-calculator.svg';
import icon_navi from '../../../public/assets/icons/icon-navi.svg';

import FavoriteButton from '../../components/FavoriteButton';
import CopyButton from '../../components/CopyButton';
import TagItem from '../../components/TagItem';
import UtilButton from '../../components/UtilButton';

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
      <Price>
        최초 10분 <span>2,500원</span> / 추가 5분당 500원
      </Price>
      <Utils>
        <UtilButton type="button" width="100" icon={icon_calculator} theme="default">
          주차비 미리보기
        </UtilButton>
        <div>
          <UtilButton type="button" width="50" icon={icon_call} theme="dark">
            전화
          </UtilButton>
          <UtilButton type="button" width="50" icon={icon_navi} theme="default">
            길안내
          </UtilButton>
        </div>
      </Utils>
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
  margin-bottom: 12px;
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

const Price = styled.div`
  margin-bottom: 12px;
  font-size: ${theme.fontSizes.paragraph2};
  color: ${theme.colors.black};
  letter-spacing: -1px;

  & span {
    font-size: ${theme.fontSizes.headLint};
  }
`;

const Utils = styled.div`
  margin-bottom: 20px;

  & button {
    margin-bottom: 10px;
  }

  & div {
    display: flex;
    gap: 10px;
  }
`;
