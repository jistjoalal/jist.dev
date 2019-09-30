import React from "react"
import { connect } from "react-redux"

import { run, setColors } from "./particleSystem"

import styles from "./ParticleAnimation.module.css"

class ParticleAnimation extends React.Component {
  componentDidMount() {
    const { theme } = this.props
    const canvas = document.getElementById("particles")
    setColors(theme)
    run(canvas)
  }
  render() {
    return <canvas id="particles" className={styles.particleAnimation} />
  }
}

const ConnectedParticleAnimation = connect(({ theme }) => ({ theme }))(
  ParticleAnimation
)

export default ConnectedParticleAnimation
