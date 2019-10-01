import { createStore as reduxCreateStore } from "redux"

import { setColors } from "../components/ParticleAnimation/particleSystem"

const reducer = (state, action) => {
  if (action.type === "TOGGLE_ANIMATION") {
    const showAnimation = !state.showAnimation

    return {
      ...state,
      showAnimation,
    }
  }
  if (action.type === "TOGGLE_THEME") {
    const theme = state.theme === "light" ? "dark" : "light"
    setColors(theme)

    return {
      ...state,
      theme,
    }
  }
  return state
}

const showAnimation = true
const theme = "light"
const initialState = { showAnimation, theme }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
