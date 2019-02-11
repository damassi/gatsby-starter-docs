import styled from "styled-components"

export const SyntaxTheme = styled.div`
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono",
      "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
      "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L",
      "Courier New", Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #f3f3f3;
    color: #5d5d5d;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #e0e0e0;
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #e0e0e0;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    margin-bottom: 20px;
  }

  .language-text {
    padding: 2px 5px !important;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.2em;
    border-radius: 0.3em;
    padding: 2px 5px;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #b0b0b0;
  }

  .token.punctuation {
    color: #303030;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: #f865ff;
  }

  .token.property {
    color: #aba800;
  }

  .token.tag {
    color: #ff8200;
  }

  .token.string {
    color: #1faaaa;
  }

  .token.selector {
    color: #ad00a1;
  }

  .token.attr-name {
    color: #989898;
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #1faaaa;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #f865ff;
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: #1faaaa;
  }

  .token.placeholder,
  .token.variable {
    color: #3777e6;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #151515;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #ff0086;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #ff0086;
    outline-offset: 0.4em;
  }

  .line-numbers .line-numbers-rows {
    border-right-color: #e0e0e0 !important;
  }

  .line-numbers-rows > span:before {
    color: #d0d0d0 !important;
  }

  .line-highlight {
    background: rgba(21, 21, 21, 0.2) !important;
    background: -webkit-linear-gradient(
      left,
      rgba(21, 21, 21, 0.2) 70%,
      rgba(21, 21, 21, 0)
    ) !important;
    background: linear-gradient(
      to right,
      rgba(21, 21, 21, 0.2) 70%,
      rgba(21, 21, 21, 0)
    ) !important;
  }
`

SyntaxTheme.displayName = "SyntaxTheme"
