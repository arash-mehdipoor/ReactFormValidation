import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import "./Navbar.css"
const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const clickHandler = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);
    useEffect(() => {
        showButton()
    }, [])
    const closeMobileMenu = () => {
        setClick(false);
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Logo
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button className="btn-outline">Sign Up</Button>}
                </div>
            </nav>

        </>

    );
}

export default NavBar;