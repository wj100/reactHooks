import React, { useContext } from 'react'
import { AppContext } from '../App'


function Navbar(p) {
  const { username,count } = useContext(AppContext);
  return (
    <div>
      navbar:{username}
      count :{count}
    </div>
  )
}

export default Navbar
