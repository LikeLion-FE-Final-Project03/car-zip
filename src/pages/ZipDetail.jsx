import React from 'react';

export default function ZipDetail() {
  return (
    <div>
      <section>
        <button type="button">뒤로 가기</button>
        <h1>주차장 상세보기</h1>
      </section>
      <section>
        <div>
          <h2>마포 공영주차장</h2>
          <button type="button">즐겨찾기 추가</button>
        </div>
        <div>
          <span>공영</span>
          <span>전기차 충전소</span>
          <span>화장실</span>
          <span>공휴일 무료</span>
        </div>
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
      </section>
      <section>리뷰</section>
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
    </div>
  );
}
