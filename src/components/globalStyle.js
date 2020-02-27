import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

// eslint-disable-next-line
const GTAmericaExtendedRegular = require("../fonts/GT-America-Extended-Regular.otf");
// eslint-disable-next-line
const GTAmericaExtendedMedium = require("../fonts/GT-America-Extended-Medium.otf");
// eslint-disable-next-line
const TiemposHeadline = require("../fonts/TiemposHeadline-Bold.otf");
// eslint-disable-next-line
const TiemposHeadlineMedium = require("../fonts/TiemposHeadline-Medium.otf");

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GT-America";
    font-style: normal;
    font-weight: 400;
    src: url(${GTAmericaExtendedRegular});
  }

  @font-face {
    font-family: "GT-America";
    font-style: normal;
    font-weight: 600;
    src: url(${GTAmericaExtendedMedium});
  }

  @font-face {
    font-family: "Tiempos-Headline";
    font-weight: 400;
    src: url(${TiemposHeadlineMedium});
  }
  
  @font-face {
    font-family: "Tiempos-Headline";
    font-weight: 600;
    src: url(${TiemposHeadline});
  }


  :root {
    --primary-color: #141943;
    --white: #FFFAFF;
  }
  * {
    box-sizing: border-box;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    overflow: hidden;
  }
  body {
    margin: 0;
    line-height: 1.5;
  }
  main {
    flex: 1 0 auto;
    h1,h2,h3,h4,h5,h6 {
    color: #0c2340;
    }
    a {
      color: #2A5DB0;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.25;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .extended {
    font-family: "Tiempos-Headline";
  }

  .extended-medium {
    font-family: "Tiempos-Headline";
    font-weight: 400;
  }

  h1 {
    font-size: 2.75rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 2.25rem;
    }
  }

  h2 {
    font-size: 2.5rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: 1.5rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 1.25rem;
    }
  }

  h5 {
    font-size: 1.25rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 1.2rem;
    }
  }

  h6 {
    font-size: 1rem;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  optgroup {
    font-weight: 700;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  html {
    font: 16px GT-America, sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  button {
    font: 16px GT-America, sans-serif;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    color: #141943;
    font-family: GT-America, sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background: #F7F9FA;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
  hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1rem;
  }
  figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }
  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }
  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;

    @media ${theme.breakpoint.onlyMobile} {
      max-width: 100%;
      height: 250px!important;
    }
  }
  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: #f4f4f4;
    border: none;
    height: 1px;
    margin: 2rem 0;
  }
  address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  dt {
    font-weight: bold;
  }
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  thead {
    text-align: left;
  }
  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  th:last-child,
  td:last-child {
    padding-right: 0;
  }
  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
      "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  pre code {
    background: none;
    line-height: 1.42;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: " ";
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: "";
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }

  .font-lg {
    font-size: 1.1rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 1rem;
    }
  }

  .font-xl {
    font-size: 1.25rem;

    @media ${theme.breakpoint.onlyMobile} {
      font-size: 1.15rem;
    }
  }

  .font-sm {
    font-size: .9rem;
  }

  .font-xs {
    font-size: .8rem;
  }

  .body-l {
    color: ${theme.colors.bodyLColor};
  }

  .text-center {
    text-align: center;
  }

  .form-control {
    border: 1px solid #E9E9E9;
    border-radius: 2px;
    padding: 1rem 2rem;
    height: 53px;
    width: 100%;
    margin-bottom: 1rem;
    outline: 0;
  }

  .reset-padding {
    padding: 0!important;
  }

  table {
    tr:nth-child(odd) td {
      background: #f9f9f9;
    }
    td, th {
      vertical-align: top;
      font-size: 14px;
      padding: 1rem!important;
      border: 1px solid #F4f4f4;
    }
  }

  .uppercase {
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}
`;
