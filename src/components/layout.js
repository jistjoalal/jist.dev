import React from "react"

import Header from "../components/header"
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
      </div>
    </div>
  </div>
)
