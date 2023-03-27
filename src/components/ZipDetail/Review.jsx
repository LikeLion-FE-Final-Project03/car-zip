import styled from 'styled-components';
import { register } from 'swiper/element/bundle';
register();

export default function Review() {
  return (
    <SwiperWrapper>
      <swiper-container>
        <swiper-slide>slide1</swiper-slide>
        <swiper-slide>slide2</swiper-slide>
        <swiper-slide>slide3</swiper-slide>
      </swiper-container>
    </SwiperWrapper>
  );
}

const SwiperWrapper = styled.section`
  padding: 0 20px;
  & .swiper-slide {
    background-color: blue;
  }
`;
