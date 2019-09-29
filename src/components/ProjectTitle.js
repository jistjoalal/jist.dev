import React from "react"
import { Link } from "gatsby"

import styles from "./ProjectTitle.module.css"

export default ({
  node: {
    id,
    frontmatter: { title, date, description },
    fields: { slug },
  },
}) => (
  <li key={id} className={styles.post}>
    <Link className={styles.link} to={`/project/${slug}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{date}</p>
      <p className={styles.description}>{description}</p>
    </Link>
  </li>
)
