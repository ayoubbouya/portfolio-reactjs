import React from 'react';
import logo from '../../images/logoBlue.png';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink className="rotate" to='/'>
                    <img style={{width:'70px'}} src={logo} alt="Logo" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/resume' activeStyle>
                        Resume
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
