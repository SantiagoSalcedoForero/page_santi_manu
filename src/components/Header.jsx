import React, { userState, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DropdownMenu } from './DropdownMenu'

export function Header() {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth <= 700)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='header'>
            <img className='logoHead' src={process.env.PUBLIC_URL + '/assets/img/logo_santi_manu.png'} alt='logo Santi y Manu' />
            {showMenu ? (
                <div className='menuIcon' onClick={toggleMenu}>
                    <i className='fa fa-bars' id='iconoHamburguesa'/>
                    {showMenu && <DropdownMenu />}
                </div>
            ) : (
                <div className='headDerecho'>
                    <Link className='linkHeader' to='../pages/Nosotros'>Nosotros</Link>
                    <Link className='linkHeader' to='../pages/Podcast'>Podcast</Link>
                </div>
            )}
           {/*  {showMenu && (
                <div className='menuItems'>
                    <Link className='linkHeader' to='../pages/Nosotros'>Nosotros</Link>
                    <Link className='linkHeader' to='../pages/Podcast'>Podcast</Link>
                </div>
            )} */}
        </div>
    )
}