import React from "react"

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
          <i
            alt="Top"
            className={styles.arrow}
            onClick={_ => window.scrollTo(0, 0)}
          />
        </footer>
      )
    )
  }
}
