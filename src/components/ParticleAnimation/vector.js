export default class Vector {
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
