import { useState } from 'react'
import styled from 'styled-components'
import { navItems } from '../../data/NavItems'
import { Dropdown } from './Dropdown'


const Nav = styled.nav`
height:10vh;
display:flex;
align-items:center;
width:100vw;
background-color:black;
color:#fff;
font-size:20px;
.nav-items{
    svg{
        fill:red
    };
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    .nav-item{
        list-style-type:none;
        cursor:pointer;
        transition:color 300ms ease-in-out;
        :hover{
           color: #3EC5F0
        }
    };
    
    .btn1 {
        padding: 30px 38px;
        background: #fff;
        color:#3EC5F0;
        cursor: pointer;
        font-size: 16px;
        border-radius: 12px;
        letter-spacing: 1px;
        line-height: 0;
        position: relative;
        border: 0;
        overflow: hidden;
        margin: 0;
        font-weight: bold;
        z-index: 1;
        transition: color 200ms ease-in-out;
        }
    .btn1:hover {
        color: #fff;
        }
    .btn1::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #3EC5F0;;
        transform: scaleX(0);
        z-index: -1;
        transition: transform 500ms ease-in-out;
        transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
        transform-origin: left;
        }
    .btn1:hover::before {
        transform: scaleX(1);
        }
}

/* justify-content:space-between; */
`
const Navbar = () => {
    const [dropdown, setShowDropdown] = useState(false)
    return (
        <>
            <Nav>
                <ul className='nav-items'>
                    <div className="navbar-logo">
                        <img src="./images/logo.svg" alt="" />
                    </div>
                    {navItems.map(item => {
                        if (item.title === 'Company') {
                            return (
                                <div style={{ position: 'relative' }}>
                                    <li className={item.cName} key={item.id}>{item.title} {item.dropdown && <img src={item.dropdown} />}</li>
                                    <Dropdown />

                                </div>
                            )
                        }
                        return (
                            <li className={item.cName} key={item.id}>{item.title} {item.dropdown && <img src={item.dropdown} />}</li>
                        )
                    })}
                    <button className="btn1">Speak with us</button>
                </ul>
            </Nav>
        </>
    )
}

export default Navbar