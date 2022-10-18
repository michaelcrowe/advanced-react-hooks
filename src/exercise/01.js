// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// The 1st argument - current value
// The 2nd argument - called the "action" (dispatch function of our state)
const countReducer = (state, newState) => {
  console.log({...state, ...newState})
  return {...state, ...newState}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
