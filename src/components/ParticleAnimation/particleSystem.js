import { Dots } from "./dots"
import {
  FPS,
  WIDTH,
  HEIGHT,
  NUM_DOTS,
  ANIMATION_BG,
  ANIMATION_FG,
} from "./constants"

/**
 * Global State
 */

let canvas, ctx
let initialized = false

const theme = localStorage.getItem("theme") || "light"
let bgColor = ANIMATION_BG[theme]
let fgColor = ANIMATION_FG[theme]

const dots = new Dots(NUM_DOTS)

/**
 * Animation Controls
 */

export async function run(cvs) {
  // attach new canvas
  canvas = cvs
  ctx = canvas.getContext("2d")

  // one frame
  setup()
  draw()
  await sleep(1000 / FPS)

  // dont queue animation loop if already running
  if (initialized) return
  initialized = true
  while (true) {
    draw()
    await sleep(1000 / FPS)
  }
}

export function setColors(theme) {
  bgColor = ANIMATION_BG[theme]
  fgColor = ANIMATION_FG[theme]
}

/**
 * Helper Functions
 */

function setup() {
  size(WIDTH, HEIGHT)
  background(bgColor)
}

function draw() {
  background(bgColor)
  dots.update(fgColor)
}

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
