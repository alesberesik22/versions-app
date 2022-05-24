import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavbarData } from './NavbarData';

import './Navbar.css';

import { Button } from './Button/Button';
import Dropdown from './Dropdown/Dropdown';
import { SamPrfData } from './SamPrfData';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
          NESS
          <i class='fab fa-firstdraft' />
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='/sam_sam_app_version'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SAM_SAM_APP_VERSION <i className='fas fa-caret-down' />
            </NavLink>
            {dropdown && <Dropdown data={NavbarData}/>}
          </li>
          <li className='nav-item' onMouseEnter={()=> setDropdown2(true)} onMouseLeave={()=> setDropdown2(false)}>
            <NavLink
              to='/sam_sam_prf_version'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SAM_SAM_PRF_VERSION
            </NavLink>
            {dropdown2 && <Dropdown data={SamPrfData}/>}
          </li>
          <li>
            <NavLink
              to='/settings'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              SETTINGS
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}


export default Navbar