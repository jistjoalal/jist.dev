import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { connect } from "react-redux"
import { GoMarkGithub } from "react-icons/go"

import NavLink from "./NavLink"

import styles from "./header.module.css"

const Header = ({ theme }) => {
  const title = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title

  const titleStyle =
    styles.title + (theme === "dark" ? " " + styles.title__dark : "")
  const nav = styles.nav + (theme === "dark" ? " " + styles.nav__dark : "")
  return (
    <header className={styles.header}>
      <h1 className={titleStyle}>
        <Link to="/">{title}</Link>
      </h1>
      <nav className={nav}>
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

const ConnectedHeader = connect(({ theme }) => ({ theme }))(Header)

export default ConnectedHeader
