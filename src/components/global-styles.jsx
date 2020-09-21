import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 20px;
  }
`;

export default GlobalStyles;
