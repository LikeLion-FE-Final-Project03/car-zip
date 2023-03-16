import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { IcMenu, IcSearchBtn } from '../../public/assets/icons/index.js';

const SearchBarWrapper = styled.div`
  background-color: ${theme.colors.dark};
  height: 78px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchArea = styled.div`
  background: ${theme.colors.white};
  height: 46px;
  border-radius: 6px;
  width: 100%;
  margin-left: 16px;
  padding-right: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchInput = styled.input`
  margin: 0 8px;
  width: 100%;
  font-size: 20px;
  border: none;
  box-shadow: none;

  ::placeholder {
    font-weight: 400;
    line-height: 24px;
    color: #999999;
  }
`;

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <IcMenu />
      <SearchArea>
        <SearchInput placeholder="검색어를 입력하세요." type="text" />
        <IcSearchBtn />
      </SearchArea>
    </SearchBarWrapper>
  );
}
