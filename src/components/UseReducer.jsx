import React, { useContext, useReducer } from 'react'

function Messages(props) {
  const {p}=props
  const {count,dispatch}=p
  return (
    <div className="div">
      <p>useReducer:</p>
    <button onClick={() => dispatch('increment')}>
      Increment
    </button>
    <button onClick={() => dispatch('decrement')}>
      Decrement
    </button>
    <span>Count: {count}</span>
  </div>
  )
}

export default Messages
