import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
      margin: 0;
      padding: 0;
      vertical-align: baseline;
      background: transparent;
      font-weight: normal;
      outline: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
  }

  html {
      height: 100%;
      scroll-behavior: smooth;
  }

  body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      height: 100%;
  }

  ul,ol {
      list-style: none;
  }

  .wrapper {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
  }

  a {
      text-decoration: none;
      color: #253858;
  }

  a:hover {
      filter: alpa(opacity = 85);
      -moz-opacity: 0.85;
	  -khtml-opacity: 0.85;
      opacity: inherit0.85;
  }

  p {
      line-height: 1.6em;
      font-size: 16px;
      font-weight: 500;
      color: #42526E;
  }

  input, textarea, select {
      font-weight: 500;
  }

  ::placeholder {
      color: #C0CCDA;
      opacity: 1;
  }

  :-ms-input-placeholder {
      color: #C0CCDA;
  }

  ::-ms-input-placeholder {
      color: #C0CCDA;
  }
`;