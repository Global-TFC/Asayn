import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle `
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
      color:black;
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
      opacity: inherit;
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

//   root root root

:root {
    --header-height: 4rem;
    --header-width: 5rem;
    /*========== Colors ==========*/
    --hue: 174;
    --sat: 63%;
    --first-color: #fff;
    --first-color-alt: hsl(var(--hue), var(--sat), 36%);
    --title-color: rgb(255, 255, 255);
    --text-color: hsl(var(--hue), 8%, 35%);
    --body-color: hsl(var(--hue),0.85 100%, 99%);
    --container-color: #4183f5;
    /*========== Font and typography ==========*/
    --body-font: 'Open Sans', sans-serif;
    --h1-font-size: 1.5rem;
    --normal-font-size: .938rem;
    --tiny-font-size: .625rem;
    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
}

@media screen and (min-width: 968px) {
     :root {
        --h1-font-size: 2.25rem;
        --normal-font-size: 1rem;
    }
}

.notfount{
    color:red;
    padding-top:100px;
    text-align:center;
}

// global style 



`;

export default GlobalStyles;