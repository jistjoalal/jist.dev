import { createStore as reduxCreateStore } from "redux"

import { setColors } from "../components/ParticleAnimation/particleSystem"

const reducer = (state, action) => {
  if (action.type === "TOGGLE_ANIMATION") {
    const showAnimation = !state.showAnimation

    localStorage.setItem("showAnimation", showAnimation)

    return {
      ...state,
      showAnimation,
    }
  }
  if (action.type === "TOGGLE_THEME") {
    const theme = state.theme === "light" ? "dark" : "light"
    setColors(theme)

    localStorage.setItem("theme", theme)

    return {
      ...state,
      theme,
    }
  }
  return state
}

const showAnimation =
  localStorage.getItem("showAnimation") === "false" ? false : true
const theme = localStorage.getItem("theme") || "light"
const initialState = { showAnimation, theme }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
