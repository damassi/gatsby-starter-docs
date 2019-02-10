import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function PageTemplate({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`
