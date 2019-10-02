import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"

import ThemeContext, { getTheme } from "./theme"

import styles from "./ThemeToggle.module.css"

const ToggleButton = () => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className={s[theme].button}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ToggleButton
