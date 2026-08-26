import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    if(counter+1<=20){
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }
  }

  const removeValue = () => {
    if(counter-1>=0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button 
      onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
