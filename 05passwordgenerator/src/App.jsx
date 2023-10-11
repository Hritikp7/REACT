import { useState, useCallback,useEffect, useRef } from "react";

function App() {
  const [length,setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!@#$%&*_+-"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator]) 
  
  return (

      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="'outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef} 
          />
          <button
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{
              setLength(e.target.value)
            }}
             />
             <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            value={number}
            onChange={()=>{
                setNumber((prev) => !prev)
            }}   />
             <label>Numbers</label>
            
          </div>
          <div>
          <input 
            type="checkbox"
            value={character}
            onChange={()=>{
                setCharacter((prev) => !prev)
            }}   />
             <label>Characters</label>
            
          </div>
        </div>
      </div>
 
  );
}

export default App;
