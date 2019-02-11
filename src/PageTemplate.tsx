import React from "react"
import { graphql } from "gatsby"
import Layout from "./Layout"
import { Helmet } from "react-helmet"

export default function PageTemplate({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data

  return (
    <Layout>
      <Helmet defaultTitle="Hokusai" titleTemplate="Hokusai | %s">
        <title>{title}</title>
      </Helmet>

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
