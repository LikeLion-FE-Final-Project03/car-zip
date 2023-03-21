import styled from 'styled-components';
import icon_favorite from '../../public/assets/icons/icon-favorite.svg';

export default function Favorite(props) {
  return <Button type={props.type}>{props.children}</Button>;
}

const Button = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  padding-top: 24px;
  background: url(${icon_favorite}) no-repeat center center;
  overflow: hidden;
  cursor: pointer;
`;
