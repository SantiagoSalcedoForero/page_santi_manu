import { Link } from 'react-router-dom'
import '../styles/Header/style.css'

export function Header() {
    return (
        <div className='header'>
            <Link to='../pages/Nosotros'>Nosotros</Link>
            <Link to='../pages/Podcast'>Podcast</Link>
        </div>
    )
}