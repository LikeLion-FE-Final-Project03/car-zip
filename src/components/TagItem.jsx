import styled from 'styled-components';
import theme from '../styles/theme';

export default function TagItem({ text }) {
  return <Span>{text}</Span>;
}

const Span = styled.span`
  display: inline-block;
  padding: 6px 12px;
  margin-right: 4px;
  margin-bottom: 8px;
  border-radius: 999px;
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.dark};
  font-size: ${theme.fontSizes.subTitle1};
`;
