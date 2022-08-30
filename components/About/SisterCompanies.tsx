import styled from "styled-components"
import { Cards } from "../reusable/Card"

const SisterComponents = styled.section`
  background: #f1f5f9;
  padding: 3rem 0;
  h1 {
    text-align: center;
    padding: 1rem 0 3rem;
    font-size: 3rem;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
  @media screen  and (max-width: 768px){
  padding: 2rem 0;
    .cards{ 
        flex-direction:column
    }
    h1 {
    text-align: center;
    padding: 2rem 0 2rem;
    font-size: 2rem;
  }
  }
`
const SisterCompanies = () => {
    return (
        <SisterComponents>
            <div className="wrapper">
                <h1>Our sister companies</h1>
                <div className="cards">
                    <Cards
                        image="./images/nxt1.svg"
                        title="NXT Trade"
                        content={` NXT Trade is a Tier 1 distributor involved in extensive
                        procurement for big corporations and government agencies. As a
                        result of NXT Trade, it is simpler for brands to get in touch
                        with the retailers they want to work with and interact with
                        their target market. They expertly deliver a product from the
                        manufacturing right up to the customer's front door. It started
                        in Lagos, Nigeria, and has since expanded to several Anglophone
                        African nations. The first branch is located at Lekki Phase 1.
                        NXT Trade collaborates with Shoprite, Spar, Lafarge, Transcorp
                        Hilton, Hartley's, and numerous more brands to achieve this
            purpose.`}
                    />
                    <Cards
                        image="./images/nxt2.svg"
                        title="NXT Trade"
                        content={` NXT Trade is a Tier 1 distributor involved in extensive
            procurement for big corporations and government agencies. As a
            result of NXT Trade, it is simpler for brands to get in touch
            with the retailers they want to work with and interact with
            their target market. They expertly deliver a product from the
            manufacturing right up to the customer's front door. It started
            in Lagos, Nigeria, and has since expanded to several Anglophone
            African nations. The first branch is located at Lekki Phase 1.
            NXT Trade collaborates with Shoprite, Spar, Lafarge, Transcorp
            Hilton, Hartley's, and numerous more brands to achieve this
            purpose.`}
                    />
                </div>
            </div>
        </SisterComponents>
    )
}

export default SisterCompanies
