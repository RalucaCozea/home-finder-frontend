import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }

  .page-header {
    position: relative;
  }

  .spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00BCD4;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  .fadex.in {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }

  .fadex.out {
    -webkit-animation: fadeout 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadeout 2s; /* Firefox < 16 */
        -ms-animation: fadeout 2s; /* Internet Explorer */
         -o-animation: fadeout 2s; /* Opera < 12.1 */
            animation: fadeout 2s;
  }

  @keyframes fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
  }}
`;
