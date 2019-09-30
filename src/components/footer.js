import React from "react"
import { GoChevronUp } from "react-icons/go"

import styles from "./footer.module.css"

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }
  componentDidMount() {
    const height = document.body.scrollHeight
    this.setState({ show: height > 800 })
  }
  render() {
    return (
      this.state.show && (
        <footer className={styles.footer}>
          <button
            className={styles.button}
            onClick={_ => window.scrollTo(0, 0)}
          >
            <GoChevronUp />
          </button>
        </footer>
      )
    )
  }
}
