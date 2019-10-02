import React from "react"
import { Link } from "gatsby"

import ThemeContext, { getTheme } from "./theme"

import styles from "./Pagination.module.css"

const Pagination = ({ pageInfo: { pageCount, currentPage }, type }) => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme }) =>
        pageCount > 1 && (
          <div className={s[theme].list}>
            {Array.from({ length: pageCount }).map((_, i) => {
              return currentPage - 1 === i ? (
                <span key={i}>{i}</span>
              ) : (
                <Link
                  className={s[theme].link}
                  key={i}
                  to={`/${type}/${i || ""}`}
                >
                  {i}
                </Link>
              )
            })}
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default Pagination
