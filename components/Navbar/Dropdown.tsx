import { useState } from "react"
import { companyDropdown } from "../../data/NavItems"
import styled from 'styled-components'
const Section = styled.section`
.services-submenu{
    width:10rem;
    position:absolute;
    list-style:none;
    text-align:left;
    top:58px;
    li{
        background:grey;
        cursor: pointer;
    };
    .submenu-item{
        display:block;
        width:100%;
        height:100%;
        color:#fff;
        padding:12px;
        font-size:14px;
        :hover{
            background:#fff;
            color:#000
        }
    }
}
.services-submenu.clicked{
         display:none
 }
`
export const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <Section>
            <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
                {companyDropdown.map(item => (
                    <li key={item.id} className={item.cName}>{item.title}</li>
                ))}
            </ul>
        </Section>
    )
}