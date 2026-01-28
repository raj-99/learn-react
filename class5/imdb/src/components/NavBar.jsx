import React from 'react'
import Logo from "../assets/pngtree-movie-board-icon-image_1455346.jpg"
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4 '>
    <Link to="/">
        <img className='w-[50px]' src={Logo} alt='Logo' />
    </Link>
    <div className='text-blue-500 text-3xl font-bold space-x-8'>
    <Link to="/">Movies</Link>
    <Link to="/watchlist">Watchlist</Link>
</div>
    </div>
  )
}

export default NavBar