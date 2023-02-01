import React, { useState } from 'react'
import Header from '../../components/header/Header'
import './auth.css'

const Auth = () => {
    const { isSignedUp, setIsSignedUp } = useState(true)

    
    const switchState = () => {
        
    }

    const handleSubmit = () => {

    }
    
    return (
        <div>
            <Header />
            <div className='auth-container'>
                <form className='auth-form' onSubmit={handleSubmit}>
                    <h2 className='title-form'>Welcome back</h2>
                    <div className='element-container'>
                        <input className='input-data' type="email" placeholder='Type your email' />
                    </div>
                    <div className='element-container'>
                        <input className='input-data' type="password" placeholder='Type your password' />
                        <input type="checkbox" />
                    </div>
                    <div className='buttons-container'>
                        <div className='button-container'>
                            <button>Sign in</button>
                        </div>
                        <div className='button-container'>
                            <button onClick={switchState}>Don't have an account?</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth