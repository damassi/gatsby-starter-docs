import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Sidebar } from "./Sidebar"

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
          <Container>
            <Sidebar />
            <div>{children}</div>
          </Container>
        )
      }}
    />
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid black;
`
