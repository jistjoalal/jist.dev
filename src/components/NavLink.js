import React from "react"
import { Link } from "gatsby"

import ThemeContext, { getTheme } from "./theme"

import styles from "./NavLink.module.css"

const NavLink = ({ to, children }) => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme }) =>
        !to.startsWith("https://") ? (
          <Link
            className={s[theme].navItem}
            activeClassName={s[theme].activeNavItem}
            to={to}
          >
            {children}
          </Link>
        ) : (
          <a
            className={s[theme].navItem}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default NavLink
