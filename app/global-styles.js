import { injectGlobal } from 'styled-components';
import theme from 'common/theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Inter UI', Helvetica, Arial, sans-serif !important;
    color: ${theme.color.dark};
    background: ${theme.color.white};
  }

  h1,
  h2,
  h3,
  button {
    font-family: 'Circular', Helvetica, Arial, sans-serif !important;
  }

  h4,
  h5,
  h6,
  p,
  input,
  select,
  textarea {
    font-family: 'Inter UI', Helvetica, Arial, sans-serif !important;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
