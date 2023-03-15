import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
        <div >
          <Link to="/"className="logo">
            <p><span>G</span>ERALD</p>
          </Link>  
        </div>
        <div className="navlink-mobile">
            <ul className={click ? "nav-links activate" : "nav-links"}>
                <li className='nav-item'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      HOME
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/about'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      ABOUT
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/experience'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      EXPERIENCE
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      CONTACT
                    </NavLink>
                  </li>
            </ul>
            
        </div>
        <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
        </div>
    </nav>
  )
}

export default Navbar