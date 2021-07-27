import React, { useContext } from 'react'
import { AppContext } from '../App'


function Navbar(p) {
  const { username,count } = useContext(AppContext);
  return (
    <div className='div'>
      <p>userContext:</p>
      <span>username:{username}</span>
      <span>count :{count}</span>
    </div>
  )
}

export default Navbar
