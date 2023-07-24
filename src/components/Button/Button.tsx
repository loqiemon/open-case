import React from 'react'

type ButtonProps = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}


function Button({text, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className='hover:bg-slate-500 ease-in duration-300 '>{text}</button>
  )
}

export default Button
