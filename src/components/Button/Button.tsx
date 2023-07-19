import React from 'react'

type ButtonProps = {
    text: string;
    onClick: () => void;
}


function Button({text, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className='hover:bg-slate-500 ease-in duration-300 ' >{text}</button>
  )
}

export default Button
