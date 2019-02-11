import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Sidebar } from "./Sidebar"
import { Box, Flex } from "rebass"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={_data => {
        return (
          <Container p={5}>
            <Sidebar width="20%" pt={5} />
            <Content>{children}</Content>
          </Container>
        )
      }}
    />
  )
}

const Container = styled(Flex)`
  max-width: 1192px;
  margin: 0 auto;
  padding-top: 0;
`

const Content = styled(Box).attrs({ px: 3 })`
  width: 75%;
  padding-top: 50px;
`
