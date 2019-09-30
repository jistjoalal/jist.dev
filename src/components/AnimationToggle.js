import React from "react"
import { connect } from "react-redux"
import { GoGitMerge } from "react-icons/go"

import styles from "./AnimationToggle.module.css"

const ToggleButton = ({ showAnimation, toggle }) => {
  return (
    <button onClick={toggle} className={styles.button}>
      <GoGitMerge />
    </button>
  )
}

const mapStateToProps = ({ showAnimation }) => {
  return { showAnimation }
}

const mapDispatchToProps = dispatch => {
  return { toggle: () => dispatch({ type: `TOGGLE_ANIMATION` }) }
}

const ToggleAnimation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton)

export default ToggleAnimation
