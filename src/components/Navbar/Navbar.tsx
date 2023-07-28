import React from 'react'
import NavbarItem from './NavbarItem'



export default function Navbar() {
  return (
    <nav>
        <ul className='flex gap-2 bg-sky-300 h-8 w-full p-1 align-middle '>
          <NavbarItem text='Кейсы' link='/'/>
          <NavbarItem text='Рулетка' link='/roulette'/>
          <NavbarItem text='Профиль' link='/profile'/>
        </ul>
    </nav>
  )
}
