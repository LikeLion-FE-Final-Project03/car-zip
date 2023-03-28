import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PrevButtonIcon } from '../../public/assets/icons';
import { ParkinglotList } from '../components/ParkinglotList';
import theme from '../styles/theme';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default function Search(props) {
  const [count, setCount] = useState(0);

  let latlngRefData = props.latlngRef;
  useEffect(() => {
    latlngRefData = props.latlngRef;
    console.log(latlngRefData.current);
  }, [props.latlngRef.current, props.searchName]);

  return (
    <>
      <SearchWrapper>
        <Link to="/">
          <PrevButtonIcon></PrevButtonIcon> 뒤로
        </Link>

        <fieldset>
          <input type="radio" name="filter" id="filter-closest" defaultChecked></input>
          <label htmlFor="filter-closest"> 가까운 순 </label>
          <input type="radio" name="filter" id="filter-cheapest"></input>
          <label htmlFor="filter-cheapest"> 저렴한 순</label>
        </fieldset>
      </SearchWrapper>
      <ul>
        <ParkinglotList latlngRef={latlngRefData}></ParkinglotList>
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
