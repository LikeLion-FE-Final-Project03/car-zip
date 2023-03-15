import styled from 'styled-components';
import { RecommendTag } from '../../../public/assets/images';
import theme from './../../styles/theme';

export default function ReviewBox() {
  return (
    <div>
      <RecommendTag />
      <p className="reveiwDate">2023년 3월 13일</p>
      <div className="reviewContent">주차면이 넓어서 좋아요. 자동화기계가 잘되어있어요.</div>
    </div>
  );
}
