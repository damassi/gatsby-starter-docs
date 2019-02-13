import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import { ArtsyMarkIcon } from "@artsy/palette"
import styled from "styled-components"

export const Sidebar = props => {
  return (
    <StaticQuery
      query={graphql`
        query SidebarQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark {
            edges {
              node {
                tableOfContents(maxDepth: 3)
                headings {
                  value
                }
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          site: {
            siteMetadata: { title },
          },
          allMarkdownRemark: { edges },
        } = data

        return (
          <Container flexDirection="column" {...props}>
            <Box py={1}>
              <Link to="/">
                <h2>{title}</h2>
              </Link>
            </Box>

            {edges.map(({ node }, key) => {
              const { tableOfContents } = node

              return (
                <Box pb={1} key={key}>
                  <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
                </Box>
              )
            })}

            <a href="http://artsy.github.io">
              <ArtsyMarkIcon width={50} height={50} mt={4} />
            </a>
          </Container>
        )
      }}
    />
  )
}

const Container = styled(Flex)`
  a {
    text-decoration: none;

    &.active {
      text-decoration: underline;
    }
  }

  ul {
    font-size: 20px;
    list-style-type: none;
    margin-left: 0;
    padding: 0;
    font-size: 14px;
    list-style-type: none;

    li {
      /* Top-level item */
      p {
        font-size: 16px;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
      }

      > ul {
        padding-left: 10px;
        list-style-type: none;

        > li {
          margin-bottom: 10px;

          /* Secondary item with children */
          p {
            font-size: 14px;
          }

          ul {
            list-style-type: square;
          }
        }
      }
    }
  }
`
