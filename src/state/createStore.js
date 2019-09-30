import { createStore as reduxCreateStore } from "redux"

import { setColors } from "../components/ParticleAnimation/particleSystem"

const ANIMATION_BG = {
  light: "white",
  dark: "black",
}

const ANIMATION_FG = {
  light: "black",
  dark: "white",
}

const reducer = (state, action) => {
  if (action.type === "TOGGLE_ANIMATION") {
    return {
      ...state,
      showAnimation: !state.showAnimation,
    }
  }
  if (action.type === "TOGGLE_THEME") {
    const theme = state.theme === "light" ? "dark" : "light"
    const bg = ANIMATION_BG[theme]
    const fg = ANIMATION_FG[theme]
    setColors(bg, fg)
    return {
      ...state,
      theme,
    }
  }
  return state
}

const initialState = { showAnimation: true, theme: "light" }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
