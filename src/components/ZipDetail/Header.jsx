import theme from '../../styles/theme';
import styled from 'styled-components';
import icon_prev_page from '../../../public/assets/icons/icon-prev-page.svg';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <DetailHeader>
      <button type="button" onClick={() => navigate(-1)}>
        뒤로 가기
      </button>
      <h1>{props.title}</h1>
    </DetailHeader>
  );
}

const DetailHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 18px;
  background-color: ${theme.colors.dark};

  & button {
    width: 17px;
    height: 29px;
    border: 0;
    padding-top: 29px;
    background: url(${icon_prev_page}) no-repeat center center;
    overflow: hidden;
    cursor: pointer;
  }

  & h1 {
    flex-grow: 1;
    text-align: center;
    font-size: ${theme.fontSizes.subTitle2};
    color: #fff;
    font-weight: bold;
  }
`;
