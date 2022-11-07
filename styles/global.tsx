import { css, Global } from '@emotion/react';
import { base } from './colors';

const globalStyles = (
  <Global 
    styles={css`
      html,
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}
  />);

export default globalStyles;