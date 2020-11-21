import styled from "styled-components"

export const StyledRichText = styled.div`
  & img {
    max-width: 100%;
    width: 100%;
  }
  p {
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    margin-bottom: 1.5rem;
    letter-spacing: -0.1px;
  }
  a {
  }
  ul {
    padding-left: 18px;
    margin-bottom: 2rem;
    line-height: 1.5;
    li {
      margin-top: 0.5rem;
    }
  }
  ul li ul {
    margin-bottom: 0.3rem;
  }
  li {
    p {
      all: inherit;
    }
  }
  h2 {
    font-size: 32px;
    line-height: 36px;
    color: #333333;
    font-weight: 700;
    margin: 0;
    margin-bottom: 12px;
  }
  img {
    width: 100%;
  }
  strong {
    font-weight: 700;
  }
  blockquote {
    border-radius: 2px;
    margin: 0;
    padding: 24px;
    padding-bottom: 0;
    margin-bottom: 2rem;
  }
  code {
    background: #c7e3ff;
    padding: 0 10px;
  }
  pre {
    color: #fff;
    background: rgb(51, 51, 51);
    font-family: "Source Code Pro", Consolas, monospace;
    font-size: 14px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    padding: 24px;
    margin: 10px 0px 32px;
    overflow: auto;
    & > code {
      padding: 0;
      background: transparent;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin: 32px 0;
    color: #707070;
  }
  th {
    font-size: 16px;
    font-weight: 300;
  }
  th,
  td {
    text-align: left;
    padding: 12px;
    border: 4px solid #fff;
  }
  tbody td {
    font-size: 12px;
    padding: 20px 12px;
  }
`
