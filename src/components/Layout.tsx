import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div>{children}</div>
        </>
      )}
    />
  )
}
