import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import NavLink from "./NavLink"

import styles from "./header.module.css"

export default () => {
  const title = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">{title}</Link>
      </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="https://github.com/jistjoalal/blog">Github</NavLink>
      </nav>
    </header>
  )
}
