import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === "TOGGLE_ANIMATION") {
    return {
      ...state,
      showAnimation: !state.showAnimation,
    }
  }
  return state
}

const initialState = { showAnimation: true }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
