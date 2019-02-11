import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import { ArtsyMarkIcon } from "@artsy/palette"

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
          <Flex flexDirection="column" {...props}>
            <Box py={4}>
              <Link to="/">
                <strong>{title}</strong>
              </Link>
            </Box>

            {edges.map(({ node }, key) => {
              const {
                frontmatter: { title },
                fields: { slug },
              } = node

              return (
                <Box pb={1} key={key}>
                  <Link to={slug}>{title}</Link>
                </Box>
              )
            })}

            <a href="http://artsy.github.io">
              <ArtsyMarkIcon width={50} height={50} mt={4} />
            </a>
          </Flex>
        )
      }}
    />
  )
}
