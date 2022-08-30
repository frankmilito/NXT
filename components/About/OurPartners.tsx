import styled from 'styled-components'

const PartnersSection = styled.section`
padding:2em 5em;
h3{
    text-align: center;
    font-size:26px;
    margin-top:3rem;
    margin-bottom:1rem
}
   .logos{
    display:flex;
    justify-content:space-between;
   }
   img{
       opacity:0.2;
       transition:opacity 300ms ease-in-out;
       :hover{
           opacity:1
       }
   }
   @media screen  and (max-width: 768px){
      .logos{
       display:grid;
       grid-template-columns:1fr 1fr 1fr;
       gap:2em;
       place-content:center;
      }
   }
   @media screen and (max-width: 450px){

   }
`

const OurPartners = () => {
    return (
        <PartnersSection>
            <h3>Our Partners</h3>
            <div className="logos">
                <img src="./images/logo1.svg" alt="" className='logo' />
                <img src="./images/logo2.svg" alt="" className='logo' />
                <img src="./images/logo3.svg" alt="" className='logo' />
                <img src="./images/logo4.svg" alt="" className='logo' />
                <img src="./images/logo5.svg" alt="" className='logo' />
                <img src="./images/logo6.svg" alt="" className='logo' />
            </div>
        </PartnersSection>
    )
}

export default OurPartners