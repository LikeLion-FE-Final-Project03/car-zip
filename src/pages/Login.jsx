import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import logo_dark from '../../public/assets/images//login/dark-logo.svg';
import facebook from '../../public/assets/images/login/facebook.svg';
import google from '../../public/assets/images/login/google.svg';
import kakao from '../../public/assets/images/login/kakao.svg';
import naver from '../../public/assets/images/login/naver.svg';

let loginWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
width: 100%;
height: 100%;
`;

export default function Login() {

  return (
    <loginWrapper>
      <h1>
        <img src={logo_dark} alt="CarZip" />
      </h1>
      <ul>
        <li>
          <a href="">
            <img src={facebook} alt="페이스북 로그인" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={google} alt="구글 로그인" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={kakao} alt="카카오 로그인" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={naver} alt="네이버 로그인" />
          </a>
        </li>
        <li><a href="">다음에 하기</a></li>
      </ul>
    </loginWrapper>
  );
}
