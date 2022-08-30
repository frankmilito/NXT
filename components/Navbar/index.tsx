import { useState } from 'react'
import styled from 'styled-components'
import { companyDropdown, investmentDropdown, navItems } from '../../data/NavItems'
import { Dropdown } from './Dropdown'
import { Nav, ResponsiveNav } from './navstyles'


const Navbar = () => {
    const [navbarState, setNavbarState] = useState(false)
    const [activeTab, setActiveTab] = useState('')
    return (
        <>
            <Nav >
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
            <ResponsiveNav state={navbarState}>
                <div className="nav">
                    <img src="./images/logo.svg" alt="" />
                    <img src="./images/hamburger.svg" alt="" style={{ width: '30px' }} onClick={() => {
                        console.log(navbarState)
                        setNavbarState(!navbarState)
                    }} />
                </div>
                <nav className={navbarState ? 'nav-mobile' : 'show'}>
                    <ul >
                        {navItems.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </nav>
            </ResponsiveNav>
        </>
    )
}

export default Navbar