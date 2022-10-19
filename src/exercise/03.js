// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const useCount = () => {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(`useCount must be used within the CountProvider`)
  }
  return context
}

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

// we are wrapping CountContext.Provider so we can manage it's own state easier.
function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]

  // pass any props through
  return <CountContext.Provider value={value} {...props} />
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount() // skip count with the ,
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
