import React from "react"
import { connect } from "react-redux"

import Header from "./header"
import Footer from "./footer"

import ParticleAnimation from "./ParticleAnimation"
import AnimationToggle from "./AnimationToggle"

import "../styles/reset.css"
import "../styles/main.css"
import styles from "./layout.module.css"

const Layout = ({ children, showAnimation }) => {
  return (
    <div className={styles.main}>
      {showAnimation && <ParticleAnimation />}
      <AnimationToggle />
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ showAnimation }) => {
  return { showAnimation }
}

const ConnectedLayout = connect(mapStateToProps)(Layout)

export default ConnectedLayout
