import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import styles from "./ProjectTitle.module.css"

const ProjectTitle = ({
  node: {
    frontmatter: { title, date, description, techs },
    fields: { slug },
  },
  theme,
}) => {
  const link = styles.link + (theme === "dark" ? " " + styles.link__dark : "")
  const titleStyle =
    styles.title + (theme === "dark" ? " " + styles.title__dark : "")
  const descriptionStyle =
    styles.description +
    (theme === "dark" ? " " + styles.description__dark : "")

  return (
    <li className={styles.post}>
      <Link className={link} to={`/project/${slug}`}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={styles.text}>{date}</p>
        <p className={descriptionStyle}>{description}</p>
        <p className={styles.text}>{techs}</p>
      </Link>
    </li>
  )
}

const ConnectedProjectTitle = connect(({ theme }) => ({ theme }))(ProjectTitle)

export default ConnectedProjectTitle
