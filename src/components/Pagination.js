import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import styles from "./Pagination.module.css"

const Pagination = ({ pageInfo: { pageCount, currentPage }, type, theme }) => {
  const list = styles.list + (theme === "dark" ? " " + styles.list__dark : "")
  const link = styles.link + (theme === "dark" ? " " + styles.link__dark : "")
  return (
    pageCount > 1 && (
      <div className={list}>
        {Array.from({ length: pageCount }).map((_, i) => {
          return currentPage - 1 === i ? (
            <span key={i}>{i}</span>
          ) : (
            <Link className={link} key={i} to={`/${type}/${i || ""}`}>
              {i}
            </Link>
          )
        })}
      </div>
    )
  )
}

const ConnectedPagination = connect(({ theme }) => ({ theme }))(Pagination)

export default ConnectedPagination
