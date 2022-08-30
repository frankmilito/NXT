import { useState } from "react"
import { DropdownType } from '../../interface'
import styled from 'styled-components'
const Section = styled.section`
    border-radius:10px;
.services-submenu{
    width:13rem;
    position:absolute;
    list-style:none;
    text-align:left;
    top:85px;
    box-shadow: 12px 20px 40px rgb(0 0 0 / 10%);
    li{
        background:grey;
        cursor: pointer;
        font-family:sans-serif;
        text-align:center;
    };
    border-radius:10px;
    .submenu-item{
        display:block;
        width:100%;
        color:#3EC5F0;
        padding:14px;
        font-size:16px;
        transition:all .2s ease-in-out;
        background: #fff;
        :hover{
            background:#3EC5F0;
            color:#fff
        }
    }
}
.services-submenu.clicked{
         display:none
 }
`
export const Dropdown = ({ data }: DropdownType) => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <Section>
            <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
                {data.map(item => (
                    <li key={item.id} className={item.cName}>{item.title}</li>
                ))}
            </ul>
        </Section>
    )
}