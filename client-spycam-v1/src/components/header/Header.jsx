import React from 'react'
import logo from '../../img/logo.png'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <img className='header-img' src={logo} alt="" />
    </header>
  )
}

export default Header