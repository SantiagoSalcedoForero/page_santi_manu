import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar(props) {
    return (
        <div className='dropdown-menu'>
            <Link className='dropdown-item' to='../pages/Nosotros'>Nosotros</Link>
            <Link className='dropdown-item' to='../pages/Podcast'>podcast</Link>
        </div>
    )
}