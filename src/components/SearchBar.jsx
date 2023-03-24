import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import {
  IcMenu,
  IcSearchBtn,
  IcSearchedKeyWord,
  IcSearchedPlace,
  IcSearchMore,
} from '../../public/assets/icons/index.js';

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
        <SearchKeywordWrapper>
          <h3>최근 검색</h3>
          <RecentSearch>
            <li>
              <IcSearchedPlace /> 지윤님카집
            </li>
            <li>
              <IcSearchedPlace /> 영범님카집
            </li>
            <li>
              <IcSearchedKeyWord /> 승지님카집
            </li>
            <li>
              <IcSearchedPlace /> 정현님카집
            </li>
            <li>
              <IcSearchedPlace /> 주희님카집
            </li>
          </RecentSearch>
          <MoreResult>
            더보기 <IcSearchMore />
          </MoreResult>
        </SearchKeywordWrapper>
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
  position: relative;
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

const SearchKeywordWrapper = styled.div`
  position: absolute;
  top: ${theme.calcRem(41)};
  left: 0;
  background-color: ${theme.colors.grey2};
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  padding: ${theme.calcRem(18)} ${theme.calcRem(12)} ${theme.calcRem(39)};
  color: ${theme.colors.dark};

  & > h3 {
    padding-bottom: ${theme.calcRem(12)};
  }
`;

const RecentSearch = styled.ul`
  padding: ${theme.calcRem(8)} 0;
  border-top: 1px solid ${theme.colors.grey};
  border-bottom: 1px solid ${theme.colors.grey};

  & > li {
    display: flex;
    align-items: center;
    height: ${theme.calcRem(34)};
  }

  li > svg {
    margin-right: 6px;
  }

  li:hover {
    background-color: ${theme.colors.white};
  }
`;

const MoreResult = styled.button`
  position: absolute;
  color: ${theme.colors.grey};
  right: ${theme.calcRem(12)};
  bottom: ${theme.calcRem(12)};
`;
