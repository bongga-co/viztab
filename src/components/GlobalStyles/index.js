import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1em;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  i {
    vertical-align: -7.5px;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  hr {
    border-color: #333333;
    border-style: solid;
  }

  /* General Styles */

  body {
    background: #ffffff;
    font-family: 'Poppins';
    color: #333333;
    line-height: normal;
    width: 100vw;
    line-height: 1;
    overflow-x: hidden;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
    line-height: 1.5em;
  }

  h2 {
    font-size: 1.7em;
    font-weight: 400;
    line-height: 1.5em;
  }

  h3 {
    font-size: 1.8em;
    font-weight: 400;
  }

  h4 {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.7em;
    }

    h3 {
        font-size: 1.4em;
    }

    h4 {
        font-size: 1.1em;
    }
  }
`
