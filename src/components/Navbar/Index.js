import React from 'react';
import logo from '../../images/logoBlue.png';
import {Nav, NavLink, NavMenu} from './NavbarElements'
import './navbar.css'
import { Component } from 'react';


class Navbar extends Component {
    state = {clicked : false}
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render() {

    
    return (
        <>
            <Nav>
                <NavLink className="rotate" to='/home'>
                    <img style={{width:'70px'}} src={logo} alt="Logo" />
                </NavLink>               
               <NavMenu className="actived">
                    <NavLink className="navlink" to='/home' activeStyle>
                        Home 
                    </NavLink>
                    <NavLink className="navlink" to='/resume' activeStyle>
                        Resume
                    </NavLink>
                    <NavLink  className="navlink" to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink className="navlink" to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

}

export default Navbar
