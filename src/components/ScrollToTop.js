import React from "react"
import { connect } from "react-redux"
import { GoChevronUp } from "react-icons/go"

import styles from "./ScrollToTop.module.css"

class ScrollToTop extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }
  componentDidMount() {
    const height = document.body.scrollHeight
    const frame = window.innerHeight
    this.setState({ show: height > frame })
  }
  render() {
    const { theme } = this.props
    const button =
      styles.button + (theme === "dark" ? " " + styles.button__dark : "")
    return (
      this.state.show && (
        <button className={button} onClick={_ => window.scrollTo(0, 0)}>
          <GoChevronUp />
        </button>
      )
    )
  }
}

const ConnectedScrollToTop = connect(({ theme }) => ({ theme }))(ScrollToTop)

export default ConnectedScrollToTop
