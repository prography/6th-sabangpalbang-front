import { css } from 'styled-components';

export const theme = {
  themeColor: '#FF306F',
  secondThemeColor: '#FF6C26',
  primaryTextColor: '#121212',
  secondTextColor: '#7E7E7E',
};
export type ITheme = typeof theme;

export const resetCSS = css`
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  abbr,
  address del,
  em,
  img,
  ins,
  q,
  strong,
  i dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  article,
  aside,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export const globalStyle = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 0;
  }
  ::-webkit-scrollbar:horizontal {
    height: 0;
  }
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  * {
    box-sizing: border-box;
    letter-spacing: normal;
  }
  body {
    background-color: #e0e0e0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #00a0c6;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const baseTagStyleList = [
  { idx: 0, text: '데킬라', backgroundColor: '#499399' },
  { idx: 1, text: '럼', backgroundColor: '#DCCA00' },
  { idx: 2, text: '진', backgroundColor: '#AF8C60' },
  { idx: 3, text: '리큐어', backgroundColor: '#D452D9' },
  { idx: 4, text: '보드카', backgroundColor: '#2E82F7' },
  { idx: 5, text: '브랜디', backgroundColor: '#FF7900' },
  { idx: 6, text: '기타' },
];
