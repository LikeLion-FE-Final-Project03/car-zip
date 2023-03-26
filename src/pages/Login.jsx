import React from 'react';
import { useState, useEffect } from 'react';
import { db, auth } from '../../Firebase.js';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from 'firebase/auth';

import styled from 'styled-components';
import theme from '../styles/theme.js';
import logo_dark from '../../public/assets/images//login/dark-logo.svg';
import facebook from '../../public/assets/images/login/facebook.svg';
import google from '../../public/assets/images/login/google.svg';
import kakao from '../../public/assets/images/login/kakao.svg';
import naver from '../../public/assets/images/login/naver.svg';
import github from '../../public/assets/images/login/github.svg';

import { result } from 'lodash';
import { async } from '@firebase/util';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    // console.log(db);
  });

  const navigate = useNavigate();

  function toHome() {
    navigate('/');
  }

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        // console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        // toHome();
        location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code, error.message);
      });
  }

  function handleGithubLogin() {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUserData(result.user);
        localStorage.setItem('user', JSON.stringify(result));
        location.reload();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(error.code, error.message);
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert('기존 구글 로그인에 사용하셨던 이메일 계정과 같은 이메일 계정입니다. 구글 계정으로 로그인 해주세요.');
        }
      });
  }

  function handleFacebookLogin() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        setUserData(result.user);
        // console.log(data);
        localStorage.setItem('user', JSON.stringify(result));
        // toHome();
        location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code, error.message);
      });
  }

  function handlesAnonymous() {
    signInAnonymously(auth)
      .then((data) => {
        setUserData(data.user);
        // console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        // toHome();
        location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code, error.message);
        // ...
      });
  }

  // function handlesAnonymous() {
  //   signInAnonymously()
  //     .then(() => {
  //       // Signed in..
  //       // setUserData(data.user);
  //       // localStorage.setItem('user', JSON.stringify(data));
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error.code);
  //       console.log(error.message);
  //       // ...
  //     });
  // }

  function preparing() {
    alert('준비중입니다.');
  }

  return (
    <LoginWrapper>
      <LoginColumn>
        <h1>
          <img src={logo_dark} alt="CarZip" />
        </h1>
        <LoginList>
          <li>
            <button onClick={handleGithubLogin}>
              <img src={github} alt="깃헙 로그인" />
            </button>
          </li>
          <li>
            <button onClick={handleGoogleLogin}>
              <img src={google} alt="구글 로그인" />
            </button>
          </li>
          <li>
            <button onClick={handleFacebookLogin}>
              <img src={facebook} alt="페이스북 로그인" />
            </button>
          </li>
          <li>
            <button onClick={preparing}>
              <img src={kakao} alt="카카오 로그인" />
            </button>
          </li>
          <li>
            <button onClick={preparing}>
              <img src={naver} alt="네이버 로그인" />
            </button>
          </li>
          <li>
            <button onClick={handlesAnonymous}>다음에 하기</button>
          </li>
          {/* <li>{userData ? userData.displayName : null}</li> */}
        </LoginList>
      </LoginColumn>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  background-color: ${theme.colors.dark};
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  h1 {
    max-width: 320px;
    overflow: hidden;
    img {
      max-width: 320px;
      object-fit: cover;
    }
  }
`;
const LoginList = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
  max-width: 320px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
