import React,{useReducer} from 'react'
import UseCallback from './components/UseCallback'
import UseContext from './components/useContext'
import UseReducer from './components/UseReducer'
import UseState from './components/UseState'
import UseRef from './components/UseRef'
import UseMemo from './components/UseMemo'
import {myReducer} from './reducer'
import './App.css'
export const AppContext = React.createContext({});

function App() {
  const [count, dispatch] = useReducer(myReducer, 10);
  return (
    <AppContext.Provider value={{
      username: 'xxxxxxxxxx',
      count:count
    }}>
      <div className="App">
        <UseState/>
        <UseCallback/>
        <UseContext />
        <UseReducer p={{count,dispatch}}/>
        <UseRef/>
        <UseMemo/>
      </div>
    </AppContext.Provider>
  )
}

export default App
