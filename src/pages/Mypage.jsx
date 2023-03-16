import React from 'react';
import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import theme, { calcRem } from '../styles/theme';
import { TextStyle } from '../styles/UsefulStyle';

import googleIcon from '../../public/assets/icons/icon-google.svg';
import kakaoIcon from '../../public/assets/icons/icon-kakao.svg';
import naverIcon from '../../public/assets/icons/icon-naver.svg';
import logoutButton from '../../public/assets/icons/button-logout.svg';
import backButton from '../../public/assets/icons/button-back.svg';

export default function Mypage() {
  return (
    <>
      <Title>
        <button>
          <img src={backButton} alt="뒤로가기 버튼" />
        </button>
        <span>마이 페이지</span>
      </Title>
      <UserInfoContents></UserInfoContents>
      <Nav></Nav>
      <Routes>
        <Route path="/*" element={<ReviewContents />}></Route>
        <Route path="/review" element={<ReviewContents />}></Route>
        <Route path="/bookmark" element={<ParkinglotContents />}></Route>
      </Routes>
    </>
  );
}

const Title = styled.h1`
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
    height: 57px;
  }

  > span {
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
        <SNSImage src={kakaoIcon} alt="SNS 아이콘 이미지" />
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
        <img src={logoutButton} alt="로그아웃 버튼" />
      </button>
    </UserInfoWrapper>
  );
}

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  border-bottom: solid 4px ${theme.colors.dark};

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

const SNSImage = styled.img`
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
    <section>
      <h2>리뷰</h2>
      <ul>리뷰 컴포넌트 들어올곳</ul>
    </section>
  );
}

function ParkinglotContents() {
  return (
    <section>
      <h2>즐겨찾기</h2>
      <ul>즐겨찾기 컴포넌트 들어올곳</ul>
    </section>
  );
}
