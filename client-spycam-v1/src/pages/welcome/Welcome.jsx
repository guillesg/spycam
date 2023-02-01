import React from 'react'
import Header from '../../components/header/Header'
import logo from '../../img/logo.png'
import './welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome-page'>
        <Header />
        <div className='welcome-body'>
            <Link to='/auth'>
                <img className='welcome-logo' src={logo} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Welcome