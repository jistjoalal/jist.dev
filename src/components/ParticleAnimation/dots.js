import { rand, ellipse, line } from "./particleSystem.js"
import Vector from "./vector"
import { WIDTH, HEIGHT } from "./constants"

export class Dot {
  static INIT_V = 1

  constructor() {
    this.id = Date.now() - ~~(Math.random() * Date.now())
    this.r = ~~rand(4, 2)
    this.m = this.r ** 3 * Math.PI
    this.pos = new Vector(
      rand(WIDTH - this.r, this.r),
      rand(HEIGHT - this.r, this.r)
    )
    this.vel = new Vector(
      rand(Dot.INIT_V * 2, -Dot.INIT_V),
      rand(Dot.INIT_V * 2, -Dot.INIT_V)
    )
  }

  draw(color) {
    ellipse(this.pos.x, this.pos.y, this.r, this.r, color)
  }

  update(fgColor) {
    this.edges()

    this.pos.add(this.vel)
    this.draw(fgColor)
  }

  edges() {
    const {
      pos: { x, y },
      r,
    } = this
    if (x < 0 + r || x > WIDTH - r) {
      this.vel.x *= -1
    }
    if (y < 0 + r || y > HEIGHT - r) {
      this.vel.y *= -1
    }
  }

  connect(dj, fgColor) {
    const d = Vector.sub(this.pos, dj.pos).mag()
    const max = 400
    if (d > max) return
    const opacity = (max - d) / max
    const color = fgColor === "white" ? "255,255,255" : "0,0,0"
    line(this.pos, dj.pos, `rgba(${color}, ${opacity})`)
  }
}

export class Dots {
  constructor(numDots) {
    this.dots = [...Array(numDots)].map(_ => new Dot())
  }

  update(fgColor) {
    const { dots } = this
    for (let i = 0; i < dots.length; i++) {
      let di = dots[i]
      for (let j = i + 1; j < dots.length; j++) {
        if (i === j) continue
        let dj = dots[j]
        di.connect(dj, fgColor)
      }
      di.update(fgColor)
    }
  }
}
