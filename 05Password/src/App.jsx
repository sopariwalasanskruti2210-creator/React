import { useState , useCallback , useEffect , useRef} from 'react';

function App() {
  const [length,setLength] = useState(8) 
  const [numberAllowed,setnumberAllowed] = useState("False")
  const [characterAllowed,setcharacterAllowed] = useState("False")
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "{}[]\|~`!@#$%^&*()?><+=-"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length)     
      pass += str.charAt(char)
    }
    setPassword(pass)

  } , [length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
	passwordRef.current?.select()
	// passwordRef.current?.setSelectionRange(0,8);
	window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  
  return (
    <>   
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          	<input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 text-gray-800"
              placeholder="Password"
              readOnly
			  ref = {passwordRef}>

			</input>
          <button 
          className='outline-none bg-blue-700 
		  text-white px-3 py-0.5 shrink-0 cursor-pointer'
		  onClick={copyPasswordToClipboard}>
            Copy</button>
        </div>
        <div 
        className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange = {(e) => {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>


        <div className='flex items-center gap-x-1 ml-4'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setnumberAllowed((prev) => !prev)
          }}/><label>Number</label>
        </div>
        <div className='flex items-center gap-x-1 ml-4'>
          <input type="checkbox" 
          defaultChecked={characterAllowed}
          id='charInput'
          onChange={() => {
            setcharacterAllowed((prev) => !prev)
          }}/><label>Character</label>
        </div>
        </div>
    </div>
    </>
  )
}

export default App
