import { useState } from 'react'
import Button from './components/Button'

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "orange",
  "black",
  "white",
  "purple"
]
function App() {
  const [color,setColor] = useState("pink")

  function handleClick (e){
    // console.log(e.target.id);
    setColor(e.target.id)
  }
  function changeColors(color,index) {
    return (
      <Button key={index}
      color={color}
      handleClick={handleClick}
      />
    )
  }
  return (
    
    <div className='w-full h-screen  duration-200'
    style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

      {colors.map(changeColors)}
      
    </div>
    </div>
    </div>
  )
}

export default App
