import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GoMarkGithub } from "react-icons/go"

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
      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className={styles.navSection}>
          <NavLink to="https://github.com/jistjoalal/">
            <GoMarkGithub />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
