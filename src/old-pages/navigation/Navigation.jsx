import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

import NavLinks from './NavLinks';
import logo from '../../img/logo.png';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <Link title='WebDevMe' className='logo' to={'/'}><img src={logo} alt="WebDevMe logo" /></Link>
            <NavLinks />
        </nav>
    )
}
