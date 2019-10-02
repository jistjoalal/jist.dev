import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GoMarkGithub } from "react-icons/go"

import NavLink from "./NavLink"

import ThemeContext, { getTheme } from "./theme"

import styles from "./header.module.css"

const Header = () => {
  const title = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title

  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className={s[theme].header}>
          <h1 className={s[theme].title}>
            <Link to="/">{title}</Link>
          </h1>
          <nav className={s[theme].nav}>
            <div className={s[theme].navSection}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/project">Projects</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className={s[theme].navSection}>
              <NavLink to="https://github.com/jistjoalal/">
                <GoMarkGithub />
              </NavLink>
            </div>
          </nav>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
