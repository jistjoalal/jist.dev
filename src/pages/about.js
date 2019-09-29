import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h2>Hello, world.</h2>
      <ul>
        <li>My name is Shane and Jist is my username.</li>
        <li>I'm a computer science student.</li>
        <li>
          I write <Link to="/blog">blog posts</Link> and{" "}
          <Link to="/project">build stuff</Link>.
        </li>
      </ul>
    </Layout>
  )
}
