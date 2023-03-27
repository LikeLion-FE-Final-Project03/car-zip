import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import theme, { calcRem } from '../styles/theme';
import { TextStyle } from '../styles/UsefulStyle';
import {
  GoogleIcon,
  KakaoIcon,
  NaverIcon,
  LogoutButton,
  BackButton,
  ReviewUpdateButton,
} from '../../public/assets/icons';
import ReviewBox from './../components/Review/ReviewBox';
import { SearchAreaScope, SearchRTDB } from './../components/getDB/ReadDB';

export default function Mypage() {
  const [data, setData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const Test1 = [];

  useEffect(() => {
    SearchRTDB('prkplceNo', '350-4-000008').then((res) => {
      setData(res);
    });
    SearchAreaScope().then((res) => {
      setLocationData(res);
    });
  }, []);

  console.log(data, 'hello');
  console.log(locationData, 'hello2');

  return (
    <>
      <Title>
        <button>
          <BackButton />
        </button>
        <h1>마이 페이지</h1>
      </Title>
      <UserInfoContents />
      <Nav />
      <Routes>
        <Route exact path="/review" element={<ReviewContents />}></Route>
        <Route exact path="/bookmark" element={<ParkinglotContents />}></Route>
      </Routes>
    </>
  );
}

const Title = styled.div`
  height: ${calcRem(57)};
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  text-align: center;
  line-height: ${calcRem(57)};
  font-size: ${theme.fontSizes.subTitle2};
  font-weight: 700;
  position: relative;

  > button {
    border: none;
    background-color: transparent;
    display: float;
    float: left;
    height: ${calcRem(57)};
    margin-left: ${calcRem(20)};
  }

  > h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// UserInfo---------------------------
function UserInfoContents() {
  return (
    <UserInfoWrapper>
      <div>
        <SNSImage>
          <KakaoIcon />
        </SNSImage>
        <div>
          <TextStyle fontsize="16px" fontweight="400">
            안녕하세요,
          </TextStyle>
          <TextStyle fontsize="24px" fontweight="700">
            Unique Id 님!
          </TextStyle>
        </div>
      </div>
      <button>
        <LogoutButton />
      </button>
    </UserInfoWrapper>
  );
}

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${calcRem(40)} ${calcRem(20)};
  border-bottom: solid ${calcRem(4)} ${theme.colors.dark};
  letter-spacing: -1px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  > button {
    border: none;
    background-color: transparent;
  }
`;

const SNSImage = styled.div`
  display: inline-block;
  width: ${calcRem(52)};
  height: ${calcRem(53)};
  margin-right: ${calcRem(12)};
`;

// -----------------------------------

// Navigation ------------------------
function Nav() {
  return (
    <NavWrapper>
      <li>
        <NavStyle to="/mypage/review">리뷰</NavStyle>
      </li>
      <li>
        <NavStyle to="/mypage/bookmark">즐겨찾기</NavStyle>
      </li>
    </NavWrapper>
  );
}

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  > li {
    flex-grow: 1;
  }
`;

const NavStyle = styled(NavLink)`
  color: ${theme.colors.dark};
  background-color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.subTitle2};
  font-wieght: 700;
  text-decoration-line: none;
  display: block;
  height: ${calcRem(57)};
  line-height: ${calcRem(57)};
  text-align: center;
  min-width: 160px;
  &.active {
    background-color: ${theme.colors.grey2};
  }
`;

// -----------------------------------

function ReviewContents() {
  return (
    <ReviewBoxWrapper>
      <ReviewBox></ReviewBox>
    </ReviewBoxWrapper>
  );
}

const ReviewBoxWrapper = styled.ul`
  margin: 20px;
  padding-bottom: 20px;
`;

//---------------------------------------

function ParkinglotContents() {
  return (
    <section>
      <h2>즐겨찾기</h2>
      <ul>즐겨찾기 컴포넌트 들어올곳</ul>
    </section>
  );
}
