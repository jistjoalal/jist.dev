import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import styles from "./NavLink.module.css"

const NavLink = ({ to, children, theme }) => {
  const navItem =
    styles.navItem + (theme === "dark" ? " " + styles.navItem__dark : "")
  const activeNavItem =
    styles.activeNavItem +
    (theme === "dark" ? " " + styles.activeNavItem__dark : "")
  return !to.startsWith("https://") ? (
    <Link className={navItem} activeClassName={activeNavItem} to={to}>
      {children}
    </Link>
  ) : (
    <a className={navItem} href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

const ConnectedNavLink = connect(({ theme }) => ({ theme }))(NavLink)

export default ConnectedNavLink
