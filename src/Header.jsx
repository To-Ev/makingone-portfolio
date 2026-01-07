import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './assets/style.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <header>
            <nav>
                <Link to="/" className="logo"><i className="icon-one-concept-logo-2"></i></Link>
                <div className="menu" onClick={() =>{
                    setMenuOpen(!menuOpen)
                }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className={menuOpen ? "open" : ""} >
                    <Link to="/" className='active'>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                </span>
            </nav>
        </header>
    )
}

export default Header