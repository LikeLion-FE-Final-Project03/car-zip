import React from 'react';
import { useState } from 'react';
import ReviewBox from './../components/Review/ReviewBox';

export default function ViewReview() {
  return (
    <div className="viewWrapper">
      <h1>리뷰 조회 테스트 페이지</h1>
      <ReviewBox />
    </div>
  );
}
