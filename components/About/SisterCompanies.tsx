import styled from "styled-components"

const SisterComponents = styled.section`
    background: #f1f5f9;
    padding:3rem 0;
  .wrapper {
    width: 80%;
    margin: 3em auto;
    h1{
        text-align:center;
        padding:1rem 0 3rem;
        font-size:3rem;
    }
  }
  .cards {
    display: flex;
    justify-content:space-between;
    gap: 3rem;
    .card{
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius:12px;
    }
    .cardContent{
        padding: 2rem;
        background-color:#0A014F;
        color:#FFFFFF;
         border-bottom-right-radius:12px;
        border-bottom-left-radius:12px;
    }
    .cardContent1{
        padding: 2rem;
        background-color:#197BBD;
        color:#FFFFFF;
        border-bottom-right-radius:12px;
        border-bottom-left-radius:12px;
    }
    .image{
        overflow: hidden;
    }
    h4 {
      font-size: 1.8rem;
      /* margin: 1rem 0; */
    }
    p {
      text-align: justify;
    }
    
    .link{
      margin-top: 2rem;
      cursor: pointer;
    padding-bottom:2rem;

    }
    .nxtImage1,.nxtImage2{
        max-width:100%;
        transition: all 300ms ease-in-out;
        border-top-right-radius:12px;
        border-top-left-radius:12px;
        :hover{
            transform:scale(1.1)
        }
    }
    
  }
`
const SisterCompanies = () => {
    return (
        <SisterComponents>
            <div className="wrapper">
                <h1>Our sister companies</h1>
                <div className="cards">
                    <div className="card">
                        <div className="image">
                            <img src="./images/nxt1.svg" alt="" className="nxtImage1" />
                        </div>
                        <div className="cardContent" >
                            <h4>NXT Trade</h4>
                            <p>
                                NXT Trade is a Tier 1 distributor involved in extensive
                                procurement for big corporations and government agencies. As a
                                result of NXT Trade, it is simpler for brands to get in touch
                                with the retailers they want to work with and interact with
                                their target market. They expertly deliver a product from the
                                manufacturing right up to the customer's front door. It started
                                in Lagos, Nigeria, and has since expanded to several Anglophone
                                African nations. The first branch is located at Lekki Phase 1.
                                NXT Trade collaborates with Shoprite, Spar, Lafarge, Transcorp
                                Hilton, Hartley's, and numerous more brands to achieve this
                                purpose.
                            </p>

                            <p className='link'>Visit our website &#62;</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src="./images/nxt2.svg" alt="" className="nxtImage1" />
                        </div>
                        <div className="cardContent1">
                            <h4>NXT Trade</h4>
                            <p>
                                NXT Trade is a Tier 1 distributor involved in extensive
                                procurement for big corporations and government agencies. As a
                                result of NXT Trade, it is simpler for brands to get in touch
                                with the retailers they want to work with and interact with
                                their target market. They expertly deliver a product from the
                                manufacturing right up to the customer's front door. It started
                                in Lagos, Nigeria, and has since expanded to several Anglophone
                                African nations. The first branch is located at Lekki Phase 1.
                                NXT Trade collaborates with Shoprite, Spar, Lafarge, Transcorp
                                Hilton, Hartley's, and numerous more brands to achieve this
                                purpose.
                            </p>

                            <p className='link'>Visit our website  {' '}{' '}&#62;</p>
                        </div>
                    </div>
                </div>
            </div>
        </SisterComponents>
    )
}

export default SisterCompanies
