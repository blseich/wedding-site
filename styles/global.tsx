import { css, Global } from '@emotion/react';

import "swiper/css/bundle";

const globalStyles = (
  <Global 
    styles={css`
      html,
      body, #__next {
        height: 100vh;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background: #13273f;
      }
      * {
        box-sizing: border-box;
      }
    `}
  />);

export default globalStyles;