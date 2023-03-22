import styled from 'styled-components';
import theme from '../../styles/theme';

function renderTable({ title, caption, rowData }) {
  return (
    <div>
      <h3>{title}</h3>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr key="head">
            <th>구분</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.key}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function InfoMore({
  info: {
    basicTime,
    basicCharge,
    addUnitTime,
    addUnitCharge,
    dayCharge,
    monthCharge,
    weekdayOpenHhmm,
    weekdayColseHhmm,
    satOpenHhmm,
    satCloseHhmm,
    holidayOpenHhmm,
    holidayCloseHhmm,
    spcmnt,
  },
}) {
  const price = {
    title: '이용요금',
    caption: '주차장 이용 요금표',
    rowData: [
      {
        key: '기본',
        value: `${
          basicTime && basicCharge ? basicTime + '분 / ' + (+basicCharge).toLocaleString() + '원' : '정보없음'
        }`,
      },
      {
        key: '추가',
        value: `${
          addUnitTime && addUnitCharge ? addUnitTime + '분 / ' + (+addUnitCharge).toLocaleString() + '원' : '정보없음'
        }`,
      },
      { key: '일주차', value: `${dayCharge ? (+dayCharge).toLocaleString() + '원' : '정보없음'}` },
      { key: '월주차', value: `${monthCharge ? (+monthCharge).toLocaleString() + '원' : '정보없음'}` },
    ],
  };

  const operatingHours = {
    title: '운영시간',
    caption: '주차장 운영 시간',
    rowData: [
      {
        key: '평일',
        value: `${weekdayOpenHhmm && weekdayColseHhmm ? weekdayOpenHhmm + ' ~ ' + weekdayColseHhmm : '정보없음'}`,
      },
      {
        key: '토요일',
        value: `${satOpenHhmm && satCloseHhmm ? satOpenHhmm + ' ~ ' + satCloseHhmm : '정보없음'}`,
      },
      {
        key: '공휴일',
        value: `${holidayOpenHhmm && holidayCloseHhmm ? holidayOpenHhmm + ' ~ ' + holidayCloseHhmm : '정보없음'}`,
      },
    ],
  };

  return (
    <InfoMoreWrapper>
      {renderTable(price)}
      {renderTable(operatingHours)}
      <div>
        <h3>특이사항</h3>
        <p>{spcmnt || '정보 없음'}</p>
      </div>
    </InfoMoreWrapper>
  );
}

const InfoMoreWrapper = styled.section`
  padding: 20px;

  & h3 {
    font-size: ${theme.fontSizes.subTitle2};
    margin-bottom: 12px;
    color: ${theme.colors.black};
  }

  & p {
    padding: 20px;
    border: 1px solid ${theme.colors.grey};
    background: ${theme.colors.grey2};
    color: ${theme.colors.black};
    line-height: 1.7;
    word-break: keep-all;
  }

  & table {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }

  & caption {
    ${theme.a11yHidden}
  }

  & table * {
    padding: 8px 0;
  }

  & table thead {
    ${theme.a11yHidden}
  }

  & table td {
    border: 1px solid ${theme.colors.grey};
    background: ${theme.colors.grey2};
    color: ${theme.colors.black};
  }
`;
