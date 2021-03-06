import React from "react"
import { graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"
import PostTitle from "../components/PostTitle"
import Pagination from "../components/Pagination"

export default ({
  data: {
    allMarkdownRemark: { edges, pageInfo },
  },
}) => (
  <Layout>
    <Head title={`Blog | page ${pageInfo.currentPage - 1}`} />
    {edges.map(edge => {
      return <PostTitle key={edge.node.id} node={edge.node} />
    })}
    <Pagination pageInfo={pageInfo} type="blog" />
  </Layout>
)

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
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
          }
        }
      }
    }
  }
`
