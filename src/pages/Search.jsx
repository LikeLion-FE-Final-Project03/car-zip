import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { PrevButton } from '../../public/assets/icons';
import { ParkinglotList } from '../components/ParkinglotList';
import theme from '../styles/theme';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default function Search() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchWrapper>
        <button>
          <Link to="/">
            <PrevButton></PrevButton> 뒤로
          </Link>
        </button>
        <fieldset>
          <input type="radio" name="filter" id="filter-closest" defaultChecked></input>
          <label htmlFor="filter-closest"> 가까운 순 </label>
          <input type="radio" name="filter" id="filter-cheapest"></input>
          <label htmlFor="filter-cheapest"> 저렴한 순</label>
        </fieldset>
      </SearchWrapper>
      <ul>
        <ParkinglotList></ParkinglotList>
      </ul>
    </>
  );
}

const SearchWrapper = styled.div`
  padding: 20px;
  letter-spacing: -1px;
  > button {
    border: none;
    background-color: transparent;
    font-size: ${theme.fontSizes.paragraph2};
    letter-spacing: -1px;
    padding: 0px;
  }
  > fieldset {
    font-size: ${theme.fontSizes.paragraph2};
    padding-top: 20px;

    > label {
      padding-right: 10px;
      line-height: 21px;
    }
    > input {
      appearance: none;
      border: 3px solid gray;
      border-radius: 50%;
      width: 0.3em;
      height: 0.3em;
      margin: 0px;
      margin-bottom: 1px;
      vertical-align: middle;

      &:checked {
        border: 3px solid ${theme.colors.orangeMain};
      }
    }
  }
`;
