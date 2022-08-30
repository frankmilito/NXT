import styled from 'styled-components'

const FooterSection = styled.section`
    padding: 4em;
    color: #FFFFFF;
    background:#0E1428;
    .wrapper{
             width:90%;
             margin:2em auto;
             border-bottom: 1px solid #666666;
             padding-bottom:3em;
         }
    .logo{
        margin:1rem 0;
    }
    h3{
        font-size:24px;
        margin-bottom:1rem;
    }
    .subscribe{
        width:90%;
    }
    input{
        padding:1.5em 1em;
        border:none;
        outline:none;
        width:80%;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        ::placeholder{
            color:grey;
            font-size:16px;
        }
    }
    button{
        padding:1.5em 1em;
        border:none;
         border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        background:#3EC5F0;
        color:white;
        width:20%;
    }
    .footerItems{
        display:grid;
        grid-template-columns:2fr 1fr 1fr 1fr;
        h5{
            font-size:20px;
            margin-bottom:1rem;
        }
        p{
            margin-bottom:.4rem;
            cursor: pointer;
            transition: color 0.2s ease-in-out;
            :hover{
                color:#3EC5F0;
            }
        }
        .socialIcons{
            margin-top:2rem;
            img{
                margin-right:12px
            }
        }
    }
    .copyright{
        text-align:center;
        width:100%;
        margin:1em auto
    }
    @media screen  and (max-width:768px){
         padding:4em 2em;
         .wrapper{
             width:90%;
             margin:0 auto;
         }
    h3{
        font-size:20px;
        margin-bottom:.8rem;
    }
    input{
        width:100%;
        border-radius:10px;
        ::placeholder{
            font-size:12px;
        }
    }
    button{
        margin:1.5em 0;
         border-radius:10px;
        width:100%;
    }
    .footerItems{
        grid-template-columns:repeat(1,1fr);
        .items{
            margin-bottom:2rem
        }
        h5{
            font-size:18px;
        }
        p{
            margin-bottom:.4rem;
        }
        .socialIcons{
           display:flex;
           place-content:center;
           flex-direction:row
        }
    }
    }
`
const Footer = () => {
    return (
        <FooterSection>
            <div className="wrapper">
                <div className="logo">
                    <img src="./images/footerlogo.svg" alt="" />
                </div>
                <div className="footerItems">
                    <div className="items">
                        <h3>Subscribe to our newsletter</h3>
                        <div className="subscribe">
                            <input type="text" placeholder="Enter your email address" />
                            <button>Subscribe</button>
                        </div>
                        <div className="socialIcons">
                            <img src="./images/social1.svg" alt="" />
                            <img src="./images/social2.svg" alt="" />
                            <img src="./images/social3.svg" alt="" />
                        </div>
                    </div>
                    <div className="items">
                        <h5>Investments</h5>
                        <p>PISI Integrated Services</p>
                        <p>HelloBudgie Nigeria</p>
                        <p>ValuePlus</p>
                        <p>Betacare</p>
                    </div>
                    <div className="items">
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Values</p>
                    </div>
                    <div className="items">
                        <h5>Support</h5>
                        <p>+2348753697789</p>
                        <p>info@nxt.ng</p>
                        <p>hello@nxt.ng</p>
                    </div>
                </div>
            </div>
            <div className="copyright">© 2022 Nitax, Inc. All rights reserved</div>
        </FooterSection>
    )
}

export default Footer