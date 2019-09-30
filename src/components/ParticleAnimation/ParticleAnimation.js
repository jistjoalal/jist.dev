import React from "react"

import { run } from "./particleSystem"

import styles from "./ParticleAnimation.module.css"

export default class ParticleAnimation extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById("particles")
    run(canvas)
  }
  render() {
    return <canvas id="particles" className={styles.particleAnimation} />
  }
}
