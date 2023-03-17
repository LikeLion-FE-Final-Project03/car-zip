import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    font-family: Pretendard;
  }
  
  body{
    margin: 0;
    padding: 0;
    font-family: Pretendard;
    min-width: 320px;
  }
`;

export default GlobalStyles;
