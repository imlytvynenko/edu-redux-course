import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  return function(dispatch) {
    dispatch({ type: DISABLE_BUTTONS })

    setTimeout(() => {
      dispatch({ type: INCREMENT })
      dispatch({ type: ENABLE_BUTTONS })
    }, 1500)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME, 
    payload: newTheme
  }
}
