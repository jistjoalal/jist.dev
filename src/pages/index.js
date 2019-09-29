import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import PostTitle from "../components/PostTitle"
import ProjectTitle from "../components/ProjectTitle"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  function latest(type) {
    for (let { node } of edges) {
      if (node.fields.type === type) return node
    }
    return null
  }
  return (
    <Layout>
      <Head title="Home" />
      <h2>Latest Post</h2>
      <PostTitle node={latest("blog")} />
      <hr />
      <h2>Latest Project</h2>
      <ProjectTitle node={latest("project")} />
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            description
          }
          fields {
            slug
            type
          }
        }
      }
    }
  }
`
