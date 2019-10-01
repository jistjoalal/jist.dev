import React from "react"
import { connect } from "react-redux"

import Header from "./header"
import ScrollToTop from "./ScrollToTop"

import ParticleAnimation from "./ParticleAnimation"
import AnimationToggle from "./AnimationToggle"
import ThemeToggle from "./ThemeToggle"

import "../styles/reset.css"
import "../styles/main.css"
import styles from "./layout.module.css"

const Layout = ({ children, showAnimation, theme }) => {
  const main = styles.main + (theme === "dark" ? " " + styles.main__dark : "")
  const container =
    styles.container + (theme === "dark" ? " " + styles.container__dark : "")
  const content =
    styles.content + (theme === "dark" ? " " + styles.content__dark : "")
  return (
    <div className={main}>
      {showAnimation && <ParticleAnimation />}
      <AnimationToggle />
      <ThemeToggle />
      <div className={container}>
        <div className={content}>
          <Header />
          {children}
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

const mapStateToProps = ({ showAnimation, theme }) => {
  return { showAnimation, theme }
}

const ConnectedLayout = connect(mapStateToProps)(Layout)

export default ConnectedLayout
