export default function InfoTables() {
  return (
    <section>
      <div>
        <h2>이용요금</h2>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>상세</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기본</td>
              <td>10분 1,000원</td>
            </tr>
            <tr>
              <td>추가</td>
              <td>5분 500원</td>
            </tr>
            <tr>
              <td>일주차</td>
              <td>6,000원</td>
            </tr>
            <tr>
              <td>월주차</td>
              <td>100,000원</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
