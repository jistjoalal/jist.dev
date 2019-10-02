import React from "react"
import { GoChevronUp } from "react-icons/go"

import ThemeContext, { getTheme } from "./theme"

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
    const s = getTheme(styles)
    return (
      <ThemeContext.Consumer>
        {({ theme }) =>
          this.state.show && (
            <button
              className={s[theme].button}
              onClick={_ => window.scrollTo(0, 0)}
            >
              <GoChevronUp />
            </button>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default ScrollToTop
