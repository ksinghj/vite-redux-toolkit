import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, edit, reset } from '../features/counter/counter-slice'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React + Redux Toolkit!</p>
        <div className="App-buttons">
          <button type="button" onClick={() => dispatch(increment())}>
            +
          </button>
          <p>count is: {count}</p>
          <button type="button" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div className="App-edit">
          <label>Edit Count:</label>
          <input
            value={count}
            type="number"
            onChange={e => {
              const value = parseInt(e.target.value)
              value ? dispatch(edit(value)) : dispatch(edit(0))
            }}
            onFocus={e => e.target.select()}
          />
        </div>
        <button className="App-reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </header>
    </div>
  )
}

export default App
