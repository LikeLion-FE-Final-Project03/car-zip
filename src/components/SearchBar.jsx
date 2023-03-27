import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { IcMenu, IcSearchBtn } from '../../public/assets/icons/index.js';

export default function SearchBar(props) {
  const toggleSidebar = () => {
    props.setIsSidebarOpen(!props.isSidebarOpen);
  };
  return (
    <SearchBarWrapper>
      <IcMenu onClick={toggleSidebar} />
      <SearchArea>
        <SearchInput placeholder="검색어를 입력하세요." type="text" />
        <IcSearchBtn />
      </SearchArea>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  background-color: ${theme.colors.dark};
  height: ${theme.calcRem(78)};
  padding: 0 ${theme.calcRem(16)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchArea = styled.div`
  background: ${theme.colors.white};
  height: ${theme.calcRem(46)};
  border-radius: ${theme.calcRem(6)};
  width: 100%;
  margin-left: ${theme.calcRem(16)};
  padding-right: ${theme.calcRem(8)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchInput = styled.input`
  margin: 0 ${theme.calcRem(8)};
  width: 100%;
  font-size: ${theme.fontSizes.subTitle1};
  border: none;
  box-shadow: none;

  ::placeholder {
    font-weight: 400;
    line-height: 24;
    color: #999999;
  }
`;
