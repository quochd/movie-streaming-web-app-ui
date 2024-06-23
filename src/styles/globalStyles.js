import { css, Global } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #1c1c1c, #6200ea, #9c27b0);
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
