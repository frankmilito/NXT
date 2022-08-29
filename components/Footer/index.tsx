import styled from 'styled-components'

const FooterSection = styled.section``
const Footer = () => {
    return (
        <FooterSection>
            <div className="logo">
                <img src="./images/logo.svg" alt="" />
            </div>
            <div className="footerItems">
                <div className="items">
                    <h3>Subscribe to our newsletter</h3>
                    <div>
                        <input type="text" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="socialIcons">
                        <img src="./images/social1.svg" alt="" />
                        <img src="./images/social2.svg" alt="" />
                        <img src="./images/social3.svg" alt="" />
                    </div>
                </div>
            </div>
        </FooterSection>
    )
}

export default Footer