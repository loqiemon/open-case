import React from 'react'
import { Link } from 'react-router-dom';


type NavbarItemProps = {
    text: string;
    link: string;
}

function NavbarItem({text, link}: NavbarItemProps) {
  return (
    <li className='ease-in duration-[700ms] hover:bg-sky-500 rounded px-1'>
        <Link to={link}>{text}</Link>
    </li>
  )
}

export default NavbarItem
