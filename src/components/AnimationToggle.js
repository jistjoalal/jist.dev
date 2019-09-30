import React from "react"
import { connect } from "react-redux"
import { GoGitMerge } from "react-icons/go"

import styles from "./AnimationToggle.module.css"

const ToggleButton = ({ showAnimation, theme, toggle }) => {
  const button =
    styles.button + (theme === "dark" ? " " + styles.button__dark : "")
  return (
    <button onClick={toggle} className={button}>
      <GoGitMerge />
    </button>
  )
}

const mapStateToProps = ({ showAnimation, theme }) => {
  return { showAnimation, theme }
}

const mapDispatchToProps = dispatch => {
  return { toggle: () => dispatch({ type: `TOGGLE_ANIMATION` }) }
}

const ToggleAnimation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton)

export default ToggleAnimation
