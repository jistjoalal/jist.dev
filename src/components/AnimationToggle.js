import React from "react"
import { GoGitMerge } from "react-icons/go"

import ThemeContext, { getTheme } from "./theme"

import styles from "./AnimationToggle.module.css"

const ToggleButton = () => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleAnimation }) => (
        <button onClick={toggleAnimation} className={s[theme].button}>
          <GoGitMerge />
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ToggleButton
