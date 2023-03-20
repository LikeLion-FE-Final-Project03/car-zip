import styled from 'styled-components';
import theme from '../styles/theme';

export default function UtilButton({ type, width, icon, children, theme }) {
  return (
    <Button type={type} icon={icon} width={width} theme={theme}>
      {children}
    </Button>
  );
}

const buttonTheme = {
  default: {
    text: theme.colors.dark,
    backgroundColor: theme.colors.yellow,
  },
  dark: {
    text: theme.colors.white,
    backgroundColor: theme.colors.dark,
  },
  orange: {
    text: theme.colors.white,
    backgroundColor: theme.colors.orangeMain,
  },
};

const Button = styled.button`
  width: ${(props) => props.width}%;
  color: ${(props) => buttonTheme[props.theme].text};
  background-color: ${(props) => buttonTheme[props.theme].backgroundColor};
  font-size: ${theme.fontSizes.subTitle2};
  padding: 10px 0;
  font-weight: 700;
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: url(${(props) => props.icon}) no-repeat center center;
    vertical-align: bottom;
  }
`;
