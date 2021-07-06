import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'
import { INCREMENT } from './redux/types'


const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

let store = createStore(rootReducer, applyMiddleware(thunk, logger))

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

store.subscribe(() => {
  const state = store.getState()
  
  counter.textContent = state.counter
  document.body.className = state.visualElements.themeValue;

  [addBtn, subBtn, asyncBtn, themeBtn].forEach((el) => el.disabled = state.visualElements.buttonsDisabled)
})

store.dispatch({ type: 'INIT_APPLICATION' })

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'

  store.dispatch(changeTheme(newTheme))
})

