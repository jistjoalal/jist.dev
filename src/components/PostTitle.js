import React from "react"
import { Link } from "gatsby"

import ThemeContext, { getTheme } from "./theme"

import styles from "./PostTitle.module.css"

const PostTitle = ({
  node: {
    frontmatter: { title, date },
    fields: { slug },
  },
}) => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <li className={s[theme].post}>
          <Link className={s[theme].link} to={`/blog/${slug}`}>
            <h2 className={s[theme].titleStyle}>{title}</h2>
            <p className={s[theme].text}>{date}</p>
          </Link>
        </li>
      )}
    </ThemeContext.Consumer>
  )
}

export default PostTitle
