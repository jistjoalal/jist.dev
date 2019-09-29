let canvas, ctx

export function rand(rng, min = 0) {
  return Math.random() * rng + min
}

export function ellipse(x, y, xr, yr, col) {
  ctx.beginPath()
  ctx.ellipse(x, y, xr, yr, 0, 0, Math.PI * 2)
  ctx.fillStyle = col
  ctx.fill()
  ctx.closePath()
}

export function line(v0, v1, col) {
  ctx.beginPath()
  ctx.moveTo(v0.x, v0.y)
  ctx.lineTo(v1.x, v1.y)
  ctx.strokeStyle = col
  ctx.stroke()
}

export function background(color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export function size(width, height) {
  canvas.width = width
  canvas.height = height
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let initialized = false

export async function run(cvs, setup, draw, fps) {
  canvas = cvs
  ctx = canvas.getContext("2d")
  setup()
  draw()
  if (initialized) return
  initialized = true
  while (true) {
    draw()
    await sleep(1000 / fps)
  }
}

export class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  static sub(v0, v1) {
    return new Vector(v0.x - v1.x, v0.y - v1.y)
  }
  add({ x, y }) {
    this.x += x
    this.y += y
  }
  sub({ x, y }) {
    this.x -= x
    this.y -= y
  }
  mult(m) {
    return new Vector(this.x * m, this.y * m)
  }
  dot({ x, y }) {
    return this.x * x + this.y * y
  }
  mag() {
    return Math.hypot(this.x, this.y)
  }
  normalize() {
    let m = this.mag()
    return new Vector(this.x / m, this.y / m)
  }
  limit(m) {
    if (this.mag() > m) {
      let d = this.normalize().mult(m)
      this.x = d.x
      this.y = d.y
    }
  }
}
