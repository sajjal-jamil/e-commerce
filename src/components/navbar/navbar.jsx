import React, { useState, useContext } from 'react';
import './Navbar.css';
import cartIcon from '../../assets/shopping-cart.svg';
import searchIcon from '../../assets/search1.png';
import logo from '../../assets/logo.mp4';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <video src={logo} autoPlay loop muted style={{ width: '50px', height: '50px' }} alt="Logo" />
                <h1>SAJJAL'S STORE</h1>
            </div>
            <div className="menu-icon" onClick={toggleMenu} aria-expanded={isMenuOpen}>
                &#9776;
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/women'>WOMEN</Link></li>
                <li><Link to='/men'>MEN</Link></li>
                <li><Link to='/kids'>KIDS</Link></li>
                <li><Link to='/footwear'>FOOTWEAR</Link></li>
                <li><Link to='/accessories'>ACCESSORIES</Link></li>
                <li><Link to='/fragnance'>FRAGRANCES</Link></li>
            </ul>
            <div className='search'>
                <input type="text" id='search' placeholder='Search your wanted item' />
                <img src={searchIcon} alt="Search" className="search-icon" />
            </div>
            <div className="cart-container">
                <Link to="/cart">
                    <img src={cartIcon} alt="Shopping cart" style={{ width: '40px', height: 'auto', cursor: 'pointer' }} />
                </Link>
                <div className='cart-counter'>0</div>
            </div>
        </nav>
    );
};

export default Navbar;
