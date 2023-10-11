import React from 'react'

const Button = ({color,handleClick}) => {
  return (
    <button id={color}
      className='outline-none px-4' 
      style={{backgroundColor: color}}
      onClick={handleClick}>{color}</button>
  )
}

export default Button