import {
  run,
  size,
  rand,
  background,
  ellipse,
  line,
  Vector,
} from "./processing.js"

const FPS = 60
const BG_COLOR = "white"
const WIDTH = 2000
const HEIGHT = 4000
const NUM_DOTS = ~~(window.innerWidth / 10)

class Dot {
  static INIT_V = 1
  static COLOR = "rgba(64, 64, 64, 1)"

  constructor() {
    this.id = Date.now() - ~~(Math.random() * Date.now())
    this.r = ~~rand(2, 2)
    this.m = this.r ** 3 * Math.PI
    this.pos = new Vector(
      rand(WIDTH - this.r, this.r),
      rand(HEIGHT - this.r, this.r)
    )
    this.vel = new Vector(
      rand(Dot.INIT_V * 2, -Dot.INIT_V),
      rand(Dot.INIT_V * 2, -Dot.INIT_V)
    )
    this.color = Dot.COLOR
  }

  draw() {
    const r = (WIDTH / window.innerWidth) * this.r
    ellipse(this.pos.x, this.pos.y, r, r, this.color)
  }

  update() {
    this.edges()

    this.pos.add(this.vel)
    this.draw()
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

  connect(dj) {
    const d = Vector.sub(this.pos, dj.pos).mag()
    const max = 400
    if (d > max) return
    const opacity = (max - d) / max
    line(this.pos, dj.pos, `rgba(0, 0, 0, ${opacity})`)
  }
}

class Dots {
  constructor(numDots) {
    this.dots = [...Array(numDots)].map(_ => new Dot())
  }

  update() {
    const { dots } = this
    for (let i = 0; i < dots.length; i++) {
      let di = dots[i]
      for (let j = i + 1; j < dots.length; j++) {
        if (i === j) continue
        let dj = dots[j]
        di.connect(dj)
      }
      di.update()
    }
  }
}

function setup() {
  size(WIDTH, HEIGHT)
  background(BG_COLOR)
}

const d = new Dots(NUM_DOTS)

function draw() {
  background(BG_COLOR)
  d.update()
}

export default function(canvas) {
  run(canvas, setup, draw, FPS)
}
