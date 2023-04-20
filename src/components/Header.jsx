import React, { userState, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
    
    const [isOpen, setIsOpen] = useState(false)
    const handleIconClick = () => {
        setIsOpen(!isOpen)
    }
    const handleCloseClick = () => {
        setIsOpen(false)
    }
    return (
        <div className='header'>
            <img className='logoHead' src={process.env.PUBLIC_URL + '/assets/img/logo_santi_manu.png'} alt='logo Santi y Manu' />
            <div className={`headDerecho ${isOpen && 'open'}`}>
                <Link className='linkHeader' to='../pages/Nosotros'>Nosotros</Link>
                <Link className='linkHeader' to='../pages/Podcast'>Podcast</Link>
            </div>
            <i className='fa fa-bars' id={`iconoHamburguesa ${isOpen && 'open'}`} onClick={ handleIconClick } style={{ display: isOpen ? 'none' : 'flex' }}/>
            <i className='fas fa-times iconoX' id='iconoX' onClick={handleCloseClick} style={{ display: isOpen ? 'flex' : 'none' }}/>
        </div>
    )
}