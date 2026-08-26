import { useState } from 'react'

function App() {
  const [color,setColor] = useState("Olive")

  return (
    <div className='w-screen h-screen duration-100'
    style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12
      inset-x-0 gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button
        onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "red",color : 'white'}}>Red</button>
        <button 
        onClick={() => setColor("lightgreen")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "green",color : 'white'}}>Green</button>
        <button 
        onClick={() => setColor("lightblue")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "blue",color : 'white'}}>Blue</button>
        <button 
        onClick={() => setColor("olive")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "olive",color : 'white'}}>Olive</button>
        <button 
        onClick={() => setColor("lightgrey")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "grey",color : 'white'}}>Grey</button>
        <button 
        onClick={() => setColor("lightyellow")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "yellow"}}>Yellow</button>
        <button 
        onClick={() => setColor("lightpink")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "pink"}}>Pink</button>
        <button 
        onClick={() => setColor("purple")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "purple",color : 'white'}}>Purple</button>
        <button 
        onClick={() => setColor("lavender")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "lavender"}}>Lavender</button>
        <button 
        onClick={() => setColor("white")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "white"}}>White</button>
        <button 
        onClick={() => setColor("black")}
        className='outline-none px-4 py-1 rounded-full shadow-sm' 
        style={{backgroundColor : "black",color : 'white'}}>Black</button>
      </div>
    </div>
  )
}


export default App
