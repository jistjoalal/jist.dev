import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        repo
      }
      html
    }
  }
`

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, repo },
      html,
    },
  },
}) => (
  <Layout>
    <Head title={title} />
    <h1>{title}</h1>
    <a href={repo}>Code on Github</a>
    <p />
    <h2>Description</h2>
    <p>{description}</p>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
