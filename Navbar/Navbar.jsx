import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <>
            <nav className='navbar'>
                <div className="nav-container">
                    <h1 className='logo-heading'>
                        <span>C</span>Odex<span>T</span>rian
                    </h1>
                    <div className="menu-icon " onClick={handleShowNavbar}>
                        {showNavbar ? <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg></i> : <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"></path></svg></i>}

                    </div>
                    <div className={`nav-elements ${showNavbar && "active"}`}>
                        <ul>
                            <li><i></i><Link to='/'>Home</Link></li>
                            <li><i></i><Link to='/about'>About</Link></li>
                            <li><i></i><Link to='/contact'>Contact</Link></li>
                            <li><i></i><Link to='/services'>Services </Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
