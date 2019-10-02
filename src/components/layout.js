import React from "react"

import Header from "./header"
import ScrollToTop from "./ScrollToTop"
import ParticleAnimation from "./ParticleAnimation"
import AnimationToggle from "./AnimationToggle"
import ThemeToggle from "./ThemeToggle"

import ThemeContext, { getTheme } from "./theme"

import "../styles/reset.css"
import "../styles/main.css"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const s = getTheme(styles)
  return (
    <ThemeContext.Consumer>
      {({ theme, animation }) => (
        <div className={s[theme].main}>
          {animation && <ParticleAnimation />}
          <AnimationToggle />
          <ThemeToggle />
          <div className={s[theme].container}>
            <div className={s[theme].content}>
              <Header />
              {children}
            </div>
          </div>
          <ScrollToTop />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Layout
