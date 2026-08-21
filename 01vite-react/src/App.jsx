import Chai from "./Chai"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const username = "Chai aur Code"

  return (
    <>
    <Chai />
    <h1>Chai aur React {username}</h1>
    <p>Test para</p>
    </>
  )
}

export default App
