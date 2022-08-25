import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
height:10vh;
background-color:black;
color:#fff;
display:flex;
align-items:center;
justify-content:space-between;
`
const Navbar = () => {
    return (
        <Nav>
            <div className="navbar-logo">
                <img src="./images/logo.svg" alt="" />
            </div>
        </Nav>
    )
}

export default Navbar