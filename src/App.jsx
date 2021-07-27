import React,{useReducer} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Messages from './components/Messages'
import {myReducer} from './reducer'
export const AppContext = React.createContext({});

function App() {
  const [count, dispatch] = useReducer(myReducer, 10);
  return (
    <AppContext.Provider value={{
      username: 'xxxxxxxxxx',
      count:count
    }}>
      <div className="App">
        <Navbar />
        <Messages p={{count,dispatch}}/>
      </div>
    </AppContext.Provider>
  )
}

export default App
