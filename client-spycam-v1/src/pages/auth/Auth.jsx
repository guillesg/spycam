import React, { useState } from 'react'
import Header from '../../components/header/Header'
import './auth.css'

const initialState = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const [ isSignedUp, setIsSignedUp ] = useState(false)
    const [ showPwd, setShowPwd ] = useState(false)
    const [ formData, setFormData ] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            setIsSignedUp(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Header />
            <div className='auth-container'>
                <form className='auth-form' onSubmit={handleSubmit}>
                    <h2 className='title-form'>{isSignedUp ? "Welcome" : "Welcome back"}</h2>
                    {isSignedUp && (
                        <>
                            <div className='element-container'>
                                <input className='input-data' type="text" placeholder='Name' onChange={handleChange} required />
                            </div>     
                            <div className='element-container'>
                                <input className='input-data' type="text" placeholder='Last name' onChange={handleChange} required />
                            </div>     
                        </>
                    )}
                    <div className='element-container'>
                        <input className='input-data' type="email" placeholder='Type your email' onChange={handleChange} required />
                    </div>
                    {isSignedUp && ( 
                        <>
                            <div className='element-container'>
                                <input className='input-data' type="text" placeholder='Phone' onChange={handleChange} required />
                            </div>         
                        </>
                    )}
                    <div className='element-container'>
                        <input className='input-data' type={showPwd ? "text" : "password"} placeholder='Type your password' onChange={handleChange} required />
                        <input type="checkbox" onClick={() => setShowPwd(!showPwd)}/>
                    </div>
                    {isSignedUp && (

                        <div className='element-container'>
                            <input className='input-data' type={showPwd ? "text" : "password"} placeholder='Confirm password' onChange={handleChange} required />
                            {/* <input type="checkbox" onClick={() => setShowPwd(!showPwd)}/> */}
                        </div>     
                    
                    )}
                    <div className='buttons-container'>
                        <div className='button-container'>
                            <button className='button-sign-in' type='submit'>{isSignedUp ? 'Sign up' : "Sign in"}</button>
                        </div>
                        <div className='button-container'>
                            <button onClick={() => setIsSignedUp(!isSignedUp)}>{isSignedUp ? "Do you have an account?" : "Don't have an account?"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth