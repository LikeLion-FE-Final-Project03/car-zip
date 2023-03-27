import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import icon_marker from '../../../public/assets/icons/icon-marker.svg';
import icon_call from '../../../public/assets/icons/icon-call.svg';
import icon_calculator from '../../../public/assets/icons/icon-calculator.svg';
import icon_navi from '../../../public/assets/icons/icon-navi.svg';
import FavoriteButton from '../FavoriteButton';
import CopyButton from '../CopyButton';
import TagItem from '../TagItem';
import UtilButton from '../UtilButton';

export default function InfoZip({
  info: {
    name,
    type,
    chargeInfo,
    count,
    where,
    address,
    basicTime,
    basicCharge,
    addUnitTime,
    addUnitCharge,
    phoneNumber,
    latitude,
    longitude,
    parkingNo,
  },
}) {
  function copyClipboard() {
    const target = document.querySelector('.zip-address').innerHTML;
    navigator.clipboard
      .writeText(target)
      .then(() => {
        alert('주소를 클립보드에 복사하였습니다.');
      })
      .catch(() => {
        alert('클립보드에 복사를 실패하였습니다.');
      });
  }

  function handleCallZip() {
    const usersDevice = navigator.userAgent;
    if (usersDevice.indexOf('Windows') > -1 || usersDevice.indexOf('Macintosh') > -1) {
      alert(`전화번호 ${phoneNumber}`);
    } else {
      document.location.href = `tel: ${phoneNumber}`;
    }
  }

  return (
    <InfoZipWrapper>
      <Title>
        <h2>{name}</h2>
        <FavoriteButton parkingNo={parkingNo}>즐겨찾기 추가</FavoriteButton>
      </Title>
      <TagWrapper>
        {type ? <TagItem text={type} /> : ''}
        {chargeInfo ? <TagItem text={chargeInfo} /> : ''}
        {count ? <TagItem text={count + '면'} /> : ''}
        {where ? <TagItem text={where} /> : ''}
      </TagWrapper>
      <Address>
        <span className="zip-address">{address}</span>
        <CopyButton type="button" onClick={copyClipboard}>
          주소 복사하기
        </CopyButton>
      </Address>
      <Price>
        최초 {(+basicTime).toLocaleString()}분 <span>{(+basicCharge).toLocaleString()}원</span> /{' '}
        {addUnitTime
          ? `추가 
        ${(+addUnitTime).toLocaleString()}분당 ${(+addUnitCharge).toLocaleString()}원`
          : '정보없음'}
      </Price>
      <Utils>
        <Link
          to="/fee"
          state={{
            basicTime: basicTime,
            basicCharge: basicCharge,
            addUnitTime: addUnitTime,
            addUnitCharge: addUnitCharge,
          }}
        >
          <UtilButton type="button" width="100" icon={icon_calculator} theme="default">
            주차비 미리보기
          </UtilButton>
        </Link>
        <div>
          <UtilButton type="button" width="50" icon={icon_call} theme="dark" onClick={handleCallZip}>
            전화
          </UtilButton>
          <UtilButton
            as="a"
            width="50"
            icon={icon_navi}
            theme="default"
            href={`https://map.kakao.com/link/to/${address},${latitude},${longitude}`}
          >
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
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  & h2 {
    font-size: ${theme.fontSizes.display};
    color: ${theme.colors.black};
    font-weight: 700;
  }
`;

const TagWrapper = styled.div`
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
  & button {
    margin-bottom: 10px;
  }

  & div {
    display: flex;
    gap: 10px;
  }
`;
