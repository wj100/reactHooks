import React, { useContext, useReducer } from 'react'

function Messages(props) {
  const {p}=props
  const {count,dispatch}=p
  return (
    <div className="App">
    <button onClick={() => dispatch('increment')}>
      Increment
    </button>
    <button onClick={() => dispatch('decrement')}>
      Decrement
    </button>
    <p>Count: {count}</p>
  </div>
  )
}

export default Messages
