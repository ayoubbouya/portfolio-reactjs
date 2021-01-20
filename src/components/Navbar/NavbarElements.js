import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


export const Nav = styled.nav`
    height:80px;
    display:flex;
    justify-content:space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index:10;
    @media screen and (max-width: 768px) {
         
        height:100px;
        flex-direction:column;
        
        
}
`

export const NavLink = styled(Link) `
    color:#000;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    &.active {
        color:#2196F3;
    }
    @media screen and (max-width: 768px) {
        color:#000;
        flex-direction: column;
        color:black;
        padding: 0px 2.5vw;
        &.active {
            color:#0772C9;
    }  
}
`
export const NavMenu = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right:24px;
   
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        
        
        
}
`
 

 
