import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Button} from './Button'
import './Navbar.css';
import Logo from './Assests/Gimages/logo1.jpg';
import PhoneIcon from './Assests/Gimages/phone-1.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
    } else {
        setButton(true);
    }
};

// useEffect - basically it's going to allows it to render that one time
useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EMERALD
          <img src={Logo} alt="Emerald Logo" className="logo-image" />
          </Link>
          <div className="phone-number">
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            
            {/* <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li> */}
          </ul>

          {button && <Button >Login </Button>}
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;