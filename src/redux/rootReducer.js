import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }

  return state;
}

const initialThemeState = {
  themeValue: 'light',
  buttonsDisabled: false
}

function visualElementsReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, themeValue: action.payload }
    case ENABLE_BUTTONS:
      return { ...state, buttonsDisabled: false }
    case DISABLE_BUTTONS:
      return { ...state, buttonsDisabled: true }  
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  visualElements: visualElementsReducer  
})
