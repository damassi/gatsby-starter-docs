import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Box } from "rebass"
import { Helmet } from "react-helmet"
import { SyntaxTheme } from "./SyntaxTheme"

export const themeProps = {
  breakpoints: [1192, 1024, 900, 768, 767],

  colors: {
    black100: "#000",
    black80: "#333",
    black60: "#666",
    black30: "#C2C2C2",
    black10: "#E5E5E5",
    black5: "#F8F8F8",
    blue60: "#a1d2ff",
    purple100: "#6E1EFF",
    purple30: "#D3BBFF",
    purple5: "#F8F3FF",
    green100: "#0EDA83",
    red100: "#F7625A",
    yellow100: "#F1AF1B",
    yellow30: "#FAE7BA",
    yellow10: "#FDF7E8",
    white100: "#FFF",
  },

  fontSizes: {
    xs: 8,
    sm: 12,
    default: 16,
    m: 20,
    lg: 30,
    xl: 40,
  },

  space: {
    0.3: 3,
    0.5: 5,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    9: 90,
    12: 120,
    18: 180,
  },
}

// Utils

/**
 * A helper to easily access colors when not in a styled-components or
 * styled-systems context.
 */
export const color = (colorKey: Color) => themeProps.colors[colorKey]

export const fontSize = (fontSize: FontSize) =>
  themeProps.fontSizes[fontSize] + "px"

export const space = (spaceKey: SpacingUnit) =>
  themeProps.space[spaceKey] + "px"

/**
 *
 */
const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Roboto', serif;
    line-height: 1.5;
    color: ${color("black60")};
  }

  h1, h2, h3, h4 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    color: ${color("black80")};
  }

  h1 {
    color: ${color("blue60")};
  }

  h3 {
    font-weight: 400;
    font-size: ${fontSize("m")};
    margin-top: ${space(3)};
    color: ${color("black80")}
  }

  ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
    margin: ${space(3)} 0;
  }

  a {
    /* text-decoration: none; */
    color: ${color("black60")};

    &:hover {
      color: ${color("black100")};
    }
  }

  .anchor {
    padding-top: 2px;
  }
`

/**
 *
 *
 */
export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themeProps}>
      <Box>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto" // 'Roboto'
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans" // 'Open Sans', sans-serif;
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik" // 'Rubik'
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif" // 'IBM Plex Serif', serif;
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700" // 'Source Sans Pro', sans-serif;
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <SyntaxTheme>{children}</SyntaxTheme>
      </Box>
    </ThemeProvider>
  )
}

// Types

/** All available color keys */
export type Color = keyof typeof themeProps["colors"]
/** All available font sizes */
export type FontSize = keyof typeof themeProps["fontSizes"]
/** All available px spacing maps */
export type SpacingUnit = keyof typeof themeProps["space"]
