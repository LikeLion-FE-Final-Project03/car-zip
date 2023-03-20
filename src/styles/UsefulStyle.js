import styled, { css } from 'styled-components';

/**
 * 글자 스타일을 변경 할 수 있다.
 * @props fontsize 글자 크기
 * @props fontweight  글자 두께
 * @props fontcolor 글자 색상
 * @props display 라인 속성 변경
 */
export const TextStyle = styled.p`

  font-size:${(props) => (props.fontsize ? props.fontsize : 'inherit')}};
  font-weight : ${(props) => (props.fontweight ? props.fontweight : 'normal')};
  color : ${(props) => (props.fontcolor ? props.fontcolor : 'black')};
  display : ${(props) => (props.inlineblock ? 'inline-block' : 'block')}
`;
