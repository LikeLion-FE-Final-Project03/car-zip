import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import theme from "../styles/theme.js";
import logo_dark from '../../public/assets/images//login/dark-logo.svg';
import facebook from '../../public/assets/images/login/facebook.svg';
import google from '../../public/assets/images/login/google.svg';
import kakao from '../../public/assets/images/login/kakao.svg';
import naver from '../../public/assets/images/login/naver.svg';

import { result } from 'lodash';
import { async } from '@firebase/util';

const LoginWrapper = styled.div`
background-color: ${theme.colors.dark};
color: white;
width: 100vw;
height : 100vh;
display: flex;
align-items : center;
justify-content : center;
`;

const LoginColumn = styled.div`
display: flex;
flex-direction : column;
align-items: center;
gap : 3rem;
h1 {
  max-width:320px;
  overflow:hidden;
  img{
    max-width:320px;
    object-fit:cover;
  }
}
`
const LoginList = styled.ul`
box-sizing: border-box;
display : flex;
flex-direction : column;
align-items: center;
padding:0 1rem;
overflow:hidden;
max-width:320px;
img{
  width: 100%;
  object-fit:cover;
}
`

export default function Login() {

  return (
    <LoginWrapper>
      <LoginColumn>
        <h1>
          <img src={logo_dark} alt="CarZip" />
        </h1>
        <LoginList>
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
          <li>
            <a href="">다음에 하기</a>
          </li>
          <li>{db._databaseId.projectId}</li>
        </LoginList>
      </LoginColumn>
    </LoginWrapper>
  );
}
