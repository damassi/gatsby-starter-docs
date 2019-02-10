import React from "react"
import { graphql } from "gatsby"

export default function PageTemplate({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      // tableOfContents,
      html,
    },
  } = data

  // console.log(tableOfContents)

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`
