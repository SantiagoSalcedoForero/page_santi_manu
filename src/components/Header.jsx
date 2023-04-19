import React, { userState, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
    return (
        <div className='header'>
            <img className='logoHead' src={process.env.PUBLIC_URL + '/assets/img/logo_santi_manu.png'} alt='logo Santi y Manu' />
            <div className='headDerecho'>
                <Link className='linkHeader' to='../pages/Nosotros'>Nosotros</Link>
                <Link className='linkHeader' to='../pages/Podcast'>Podcast</Link>
            </div>
            <i className='fa fa-bars' id='iconoHamburguesa' />
        </div>
    )
}