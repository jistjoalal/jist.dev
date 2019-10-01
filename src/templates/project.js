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
        techs
      }
      html
    }
  }
`

const TECH_URLS = {
  Gatsby: "https://www.gatsbyjs.org/",
  React: "https://reactjs.org/",
  Redux: "https://redux.js.org/",
  GraphQL: "https://graphql.org/",
  KaTeX: "https://katex.org/",
  Prism: "https://prismjs.com/",
}

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, repo, techs },
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

    <h2>Tech Used</h2>
    <ul>
      {techs.split`, `.map(tech => (
        <li key={tech}>
          <a href={TECH_URLS[tech]}>{tech}</a>
        </li>
      ))}
    </ul>
  </Layout>
)
