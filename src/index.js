import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Nosotros from './pages/Nosotros'
import Podcast from './pages/Podcast'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Router>
            <Header />
            <Routes>
                <Route path='/pages/nosotros' element={<Nosotros />} />
                <Route path='/pages/podcast' element={<Podcast />} />
            </Routes>
        </Router>
</>) 