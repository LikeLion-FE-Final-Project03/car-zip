import React from 'react';
import { useState } from 'react';
import { IcVector } from '../../public/assets/icons';
import { NotRecommendTag, RecommendTag } from '../../public/assets/images';

export default function NewReview() {
  return (
    <div className="ReviewWrapper">
      <h1>
        <IcVector />
        리뷰 작성
      </h1>
      <h2>파킹 주차장</h2>
      <div className="recommendBtnWrapper">
        <RecommendTag />
        <NotRecommendTag />
      </div>
      <textarea name="reviewInput" cols="30" rows="10" placeholder="리뷰를 작성해주세요."></textarea>
      <p>40/100자</p>
      <button type="submit" value={'submit'}>
        등록하기
      </button>
    </div>
  );
}
