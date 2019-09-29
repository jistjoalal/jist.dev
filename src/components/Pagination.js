import React from "react"
import { Link } from "gatsby"

import styles from "./Pagination.module.css"

export default ({ pageInfo: { pageCount, currentPage }, type }) => {
  return (
    pageCount > 1 && (
      <div className={styles.list}>
        {Array.from({ length: pageCount }).map((_, i) => {
          return currentPage - 1 === i ? (
            <span key={i}>{i}</span>
          ) : (
            <Link key={i} to={`/${type}/${i || ""}`}>
              {i}
            </Link>
          )
        })}
      </div>
    )
  )
}
