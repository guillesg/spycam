import React, { useState } from "react";
import './aside.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import PlaceForm from '../placeForm/PlaceForm'

function Aside() {

    const [ addPlace, setAddPlace ] = useState(false)
    const [ showBurger, setShowBurger ] = useState(true)

    async function  getData() {
        
    }

    // const handleBurger =  (e) => {
    //     e.preventDefault()
    //     setShowBurger(!showBurger)
    //     setAddPlace(!addPlace)
    // }

    return (
        <aside className={showBurger ? "list-container" : "" }>
            <div onClick={() => setShowBurger(!showBurger)}>
                <button className="burger"><GiHamburgerMenu /></button>
            </div>
            {showBurger && (
                <>
                    <h3 className="title-list">List of places</h3>
                    <ul className="list">
                        <li><a>Los Quintana</a></li>
                        <li><a>Finca El Sobradillo</a></li>
                        <li><a>Chalet La Minilla</a></li>
                    </ul>
                    {addPlace && (
                        <PlaceForm />
                    )}
                    <div className="button-container">
                        <button onClick={() => setAddPlace(!addPlace)} className="button">+</button>
                    </div> 
                </>
            )}
        </aside>
    )
}

export default Aside