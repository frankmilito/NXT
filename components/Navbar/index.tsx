import { useState } from 'react'
import styled from 'styled-components'
import { companyDropdown, investmentDropdown, navItems } from '../../data/NavItems'
import { Dropdown } from './Dropdown'

type NavbarProps = {
    state: boolean
}
const Nav = styled.nav<NavbarProps>`
/* display: ${({ state }) => (state ? "none" : "block")}; */
display:block;
height:10vh;
display:flex;
align-items:center;
width:100vw;
color:#fff;
font-size:20px;
padding:0 5em;
.nav-items{
    svg{
        fill:red
    };
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    width:100%;
    .nav-item{
        height:100%;
        list-style-type:none;
        cursor:pointer;
        transition:color 200ms ease-in-out;
        color:#000;
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
        border:1px solid #3EC5F0;
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
.dropdown{
    height:10vh;
    display:grid;
    place-content:center;
}
 @media screen  and (max-width: 768px){
    display:none
 }
/* justify-content:space-between; */
`
const ResponsiveNav = styled.nav`
display:none;
 @media screen  and (max-width: 768px){
    display:block;
    padding:2em;
    .nav{
        display:flex;
        justify-content:space-between;
    }
 }
`


const Navbar = () => {
    const [navbarState, setNavbarState] = useState(false)
    const [activeTab, setActiveTab] = useState('')
    return (
        <>
            <Nav state={navbarState} className={!navbarState ? 'show' : ''}>
                <ul className='nav-items'>
                    <div className="navbar-logo">
                        <img src="./images/logo.svg" alt="" />
                    </div>
                    {navItems.map(item => {
                        if (item.title === 'Company') {
                            return (
                                <div onMouseEnter={() => setActiveTab('tab1')} onMouseLeave={() => setActiveTab('')} className='dropdown' style={{ height: '10vh', display: 'grid', placeContent: 'center' }}>
                                    <li className={item.cName} key={item.id} >{item.title} {item.dropdown && <img src={item.dropdown} />}

                                        {activeTab == 'tab1' && <Dropdown data={companyDropdown} />}
                                    </li>

                                </div>
                            )
                        }
                        else if (item.title === 'Investments') {
                            return (
                                <div onMouseEnter={() => setActiveTab('tab2')} onMouseLeave={() => setActiveTab('')} className='dropdown' style={{ height: '10vh', display: 'grid', placeContent: 'center' }}>
                                    <li className={item.cName} key={item.id} >{item.title} {item.dropdown && <img src={item.dropdown} />}
                                        {activeTab == 'tab2' && <Dropdown data={investmentDropdown} />}
                                    </li>

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
            <ResponsiveNav>
                <div className="nav">
                    <img src="./images/logo.svg" alt="" />
                    <img src="./images/hamburger.svg" alt="" style={{ width: '50px' }} />
                </div>
            </ResponsiveNav>
        </>
    )
}

export default Navbar