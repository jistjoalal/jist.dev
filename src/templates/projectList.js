import React from "react"
import { graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"
import ProjectTitle from "../components/ProjectTitle"
import Pagination from "../components/Pagination"

export default ({
  data: {
    allMarkdownRemark: { edges, pageInfo },
  },
}) => {
  return (
    <Layout>
      <Head title={`Projects | page ${pageInfo.currentPage - 1}`} />
      {edges.map(ProjectTitle)}
      <Pagination pageInfo={pageInfo} type="project" />
    </Layout>
  )
}

export const projectListQuery = graphql`
  query projectListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      pageInfo {
        pageCount
        currentPage
      }
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            description
          }
        }
      }
    }
  }
`
