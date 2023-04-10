import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import LinksSocial from '../LinksSocial';

export default function NavLinks(props) {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <motion.ul initial={animateFrom} animate={animateTo} transition={{ delay: 0.15 }} className='nav-links'>
            <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.15 }}>
                <Link onClick={props.closeMenu} to={'/'} className="link">Home</Link>
            </motion.li>

            <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.25 }}>
                <Link onClick={props.closeMenu} to={'/about'} className="link">About</Link>
            </motion.li>

            <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.35 }}>
                <Link onClick={props.closeMenu} to={'/projects'} className="link">Projects</Link>
            </motion.li>

            <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.45 }}>
                <Link onClick={props.closeMenu} to={'/contact'} className="link">Contact</Link>
            </motion.li>

            {props.isMobileNavigation && <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.45 }}>
                <LinksSocial />
            </motion.li>}

            {/*props.isMobileNavigation && <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.45 }}>
                <BottomNav />
    </motion.li>*/}
        </motion.ul>
    )
}




