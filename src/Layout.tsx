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
            <Sidebar width="25%" pt={5} />
            <Content width="75%" pl={5}>
              {children}
            </Content>
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

const Content = styled(Box)`
  padding-top: 50px;
`
