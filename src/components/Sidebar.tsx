import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export const Sidebar = _props => {
  return (
    <StaticQuery
      query={graphql`
        query SidebarQuery {
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
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }, key) => {
              const {
                frontmatter: { title },
                fields: { slug },
              } = node

              return (
                <div key={key}>
                  <Link to={slug}>{title}</Link>
                </div>
              )
            })}
          </div>
        )
      }}
    />
  )
}
