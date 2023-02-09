import React from 'react'
import './placeForm.css'

function PlaceForm() {
  return (
    <div className='form-place-container'>
        <div className='form-place-title'>
          <h2>Add a place</h2>
        </div>
        <form className='form-place' action="">
            <input className='form-place-input' type="text" placeholder="Place's name" />
            <button className='form-place-button'>Add</button>
        </form>
    </div>
  )
}

export default PlaceForm