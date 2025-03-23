import { css } from "@emotion/react";

const GlobalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Inter", sans-serif;
    background-color: #f9f9f9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
