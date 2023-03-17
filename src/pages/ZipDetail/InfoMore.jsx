import styled from 'styled-components';
import theme from '../../styles/theme';

const zipInfo = {
  zipName: '마포 공영주차장',
  type: '공영',
  prkcmprt: 25,
  rdnmadr: '서울 서대문구 충정로 60 10층',
  phoneNumber: '043-870-7815',
  defaultPrice: 1000,
  defaultTime: 10,
  additionalPrice: 500,
  additionalTime: 5,
  dayTime: 15000,
  monthTime: 100000,
  weekdayStart: '00:00',
  weekdayEnd: '24:00',
  weekendStart: '00:00',
  weekendEnd: '24:00',
  holidayStart: '00:00',
  holidayEnd: '24:00',
  significant:
    '면제 : 성실납세자 차량 등(1년 한정), 장애인·국가유공자·민주유공자·고엽제후유의증 환자(1일1회에 3시간 한정), 환경친화적 자동차(1일1회 2시간한정) *50퍼센트 감면 : 경형자동차·저공해자동차·장기기증자· 3자녀이상 다자녀 등록차량· 연간100시간이상 봉사자· 병역명문가 등',
  referenceDate: '2021-05-13',
};

const price = {
  title: '이용요금',
  caption: '주차장 이용 요금표',
  rowData: [
    {
      key: '기본',
      value: `${zipInfo.defaultTime.toLocaleString()}분 / ${zipInfo.defaultPrice.toLocaleString()}원`,
    },
    {
      key: '추가',
      value: `${zipInfo.additionalTime.toLocaleString()}분 / ${zipInfo.additionalPrice.toLocaleString()}원`,
    },
    { key: '일주차', value: zipInfo.dayTime.toLocaleString() + '원' },
    { key: '월주차', value: zipInfo.monthTime.toLocaleString() + '원' },
  ],
};

const operatingHours = {
  title: '운영시간',
  caption: '주차장 운영 시간',
  rowData: [
    {
      key: '평일',
      value: `${zipInfo.defaultTime.toLocaleString()}분 / ${zipInfo.defaultPrice.toLocaleString()}원`,
    },
    {
      key: '추가',
      value: `${zipInfo.additionalTime.toLocaleString()}분 / ${zipInfo.additionalPrice.toLocaleString()}원`,
    },
    { key: '일주차', value: zipInfo.dayTime.toLocaleString() + '원' },
    { key: '월주차', value: zipInfo.monthTime.toLocaleString() + '원' },
  ],
};

function renderTable({ title, caption, rowData }) {
  return (
    <div>
      <h3>{title}</h3>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th>구분</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((item) => {
            return (
              <tr>
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

export default function InfoMore() {
  return (
    <InfoMoreWrapper>
      {renderTable(price)}
      {renderTable(operatingHours)}
      <div>
        <h3>특이사항</h3>
        <p>{zipInfo.significant}</p>
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
