import React from "react"

import particles from "./particleSystem"

import styles from "./ParticleAnimation.module.css"

export default class ParticleAnimation extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById("particles")
    particles(canvas)
  }
  render() {
    return <canvas id="particles" className={styles.particleAnimation} />
  }
}
