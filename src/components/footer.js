import React from "react"
import { connect } from "react-redux"
import { GoChevronUp } from "react-icons/go"

import styles from "./footer.module.css"

class Footer extends React.Component {
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
        <footer className={styles.footer}>
          <button className={button} onClick={_ => window.scrollTo(0, 0)}>
            <GoChevronUp />
          </button>
        </footer>
      )
    )
  }
}

const ConnectedFooter = connect(({ theme }) => ({ theme }))(Footer)

export default ConnectedFooter
