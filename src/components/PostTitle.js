import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import styles from "./PostTitle.module.css"

const PostTitle = ({
  node: {
    frontmatter: { title, date },
    fields: { slug },
  },
  theme,
}) => {
  const link = styles.link + (theme === "dark" ? " " + styles.link__dark : "")
  const titleStyle =
    styles.title + (theme === "dark" ? " " + styles.title__dark : "")
  return (
    <li className={styles.post}>
      <Link className={link} to={`/blog/${slug}`}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={styles.text}>{date}</p>
      </Link>
    </li>
  )
}

const ConnectedPostTitle = connect(({ theme }) => ({ theme }))(PostTitle)

export default ConnectedPostTitle
