import React from "react"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h2>Hello, world.</h2>
      <ul>
        <li>My name is Shane and Jist is my username.</li>
        <li>I'm a computer science student.</li>
        <li>
          I write <a href="/blog">blog posts</a> and{" "}
          <a href="/project">build stuff</a>.
        </li>
      </ul>
    </Layout>
  )
}
