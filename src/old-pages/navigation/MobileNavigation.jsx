import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import logo from '../../img/logo.png';

//import { GrMenu as HamburgerIcon } from 'react-icons/gr';
//import { GrClose as CloseIcon } from 'react-icons/gr';

import { IoMdMenu as HamburgerIcon } from 'react-icons/io';
import { IoMdClose as CloseIcon } from 'react-icons/io';

import './navigation.css'

import { motion } from 'framer-motion';


export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => setIsOpen(false);

    const hamburgerIcon = <HamburgerIcon onClick={handleClick} className='menu-icon' />;
    const closeIcon = <CloseIcon onClick={handleClick} className='menu-icon' />;

    return (
        <nav className='mobile-navigation'>
            <Link title='WebDevMe' className='logo' to={'/'}><img src={logo} alt="WebDevMe logo" /></Link>
            {!isOpen ? hamburgerIcon : closeIcon}
            {isOpen && <NavLinks isMobileNavigation={true} closeMenu={closeMenu} />}
        </nav>
    )
}
