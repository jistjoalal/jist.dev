import React from "react"
import { connect } from "react-redux"
import { FaSun, FaMoon } from "react-icons/fa"

import styles from "./ThemeToggle.module.css"

const ToggleButton = ({ theme, toggle }) => {
  const style =
    styles.button + (theme === "dark" ? " " + styles.button__dark : "")
  return (
    <button onClick={toggle} className={style}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  )
}

const mapStateToProps = ({ theme }) => {
  return { theme }
}

const mapDispatchToProps = dispatch => {
  return { toggle: () => dispatch({ type: `TOGGLE_THEME` }) }
}

const ThemeToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton)

export default ThemeToggle
