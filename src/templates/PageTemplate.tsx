import React from "react"
import { graphql } from "gatsby"

export default function PageTemplate({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { slug: { eq: $id } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
