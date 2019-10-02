import React from "react"

import { setColors } from "./ParticleAnimation/particleSystem"

const defaultState = {
  theme: "light",
  toggleTheme: () => {},
  animation: true,
  toggleAnimation: () => {},
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

class ThemeProvider extends React.Component {
  state = {
    theme: "light",
    animation: true,
  }
  toggleTheme = () => {
    let theme = this.state.theme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", theme)
    this.setState({ theme })
    setColors(theme)
  }
  toggleAnimation = () => {
    let animation = !this.state.animation
    localStorage.setItem("animation", animation)
    this.setState({ animation })
  }
  componentDidMount() {
    const theme = localStorage.getItem("theme")
    if (theme) {
      this.setState({ theme })
    } else if (supportsDarkMode()) {
      this.setState({ theme: "dark" })
    }
    setColors(theme)
    const animation =
      localStorage.getItem("animation") === "false" ? false : true
    this.setState({ animation })
  }
  render() {
    const { children } = this.props
    const { theme, animation } = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
          animation,
          toggleAnimation: this.toggleAnimation,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

function getTheme(styles) {
  let r = { dark: {}, light: {} }
  for (let [k, v] of Object.entries(styles)) {
    if (!k.endsWith("__dark")) {
      r["dark"][k] = v + " " + styles[k + "__dark"]
      r["light"][k] = v
    }
  }
  return r
}

export default ThemeContext
export { ThemeProvider, getTheme }
