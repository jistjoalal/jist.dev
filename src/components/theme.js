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
    // set theme to saved value, prefer dark, default light
    const lsTheme = localStorage.getItem("theme")
    const theme = lsTheme || (supportsDarkMode() ? "dark" : "light")
    this.setState({ theme })
    setColors(theme)

    // set animation to saved value, default true
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

/**
 * @param {Object} styles css module object
 * @returns {Object} map of classnames for theme
 * EX: {
 *   light: {
 *     button: 'header-module--title--123'
 *   }
 *   dark: {
 *     button: 'header-module--title--123 header-module--title__dark--123'
 *   }
 * }
 * This makes it easier to write the default styles as light and override only
 * the colors with the dark theme
 */
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
