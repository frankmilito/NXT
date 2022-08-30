import styled from 'styled-components'

type NavbarProps = {
    state: boolean
}
export const Nav = styled.nav`
display:block;
height:10vh;
display:flex;
align-items:center;
min-width:100vw;
color:#fff;
font-size:20px;
padding:0 5em;
.nav-items{
    min-width:800px;
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
`
export const ResponsiveNav = styled.nav<NavbarProps>`
display:none;
 @media screen  and (max-width: 768px){
    display:block;
    padding:2em;
    .nav{
        display:flex;
        justify-content:space-between;
    }
    .nav-mobile{
        position:relative;
       /* display: ${({ state }) => (state ? "block" : "none")}; */
    }
    .show{
        display:none;
    }
    ul{
        position:absolute;
        z-index:2;
        background-color:white;
        width:100%;
        top:0;
        /* right: ${({ state }) => (state ? "100%" : "-100%")}; */
        bottom: 0;
        height:180px;
        li{
            list-style:none;
            text-align:center;
            padding:5px 0;
            margin:5px 0;
            :hover{
                background-color:#3EC5F0;
                color:white;
            }
        }
    }
 }
`