import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import ParticleAnimation from "./ParticleAnimation"

import "../styles/reset.css"
import "../styles/main.css"
import styles from "./layout.module.css"

export default ({ children }) => (
  <div className={styles.main}>
    <ParticleAnimation />
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  </div>
)
