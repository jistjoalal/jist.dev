import React from "react"
import { Link } from "gatsby"

import ThemeContext, { getTheme } from "./theme"

import styles from "./ProjectTitle.module.css"

const ProjectTitle = ({
  node: {
    frontmatter: { title, date, description, techs },
    fields: { slug },
  },
}) => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <li className={s[theme].post}>
          <Link className={s[theme].link} to={`/project/${slug}`}>
            <h2 className={s[theme].titleStyle}>{title}</h2>
            <p className={s[theme].text}>{date}</p>
            <p className={s[theme].descriptionStyle}>{description}</p>
            <p className={s[theme].text}>{techs}</p>
          </Link>
        </li>
      )}
    </ThemeContext.Consumer>
  )
}

export default ProjectTitle
