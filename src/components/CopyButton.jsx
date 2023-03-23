import styled from 'styled-components';
import icon_copy from '../../public/assets/icons/icon-copy.svg';

export default function CopyButton({ type, children, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 17px;
  height: 20px;
  border: 0;
  padding-top: 20px;
  background: url(${icon_copy}) no-repeat center center;
  overflow: hidden;
  cursor: pointer;
`;
