import styled from 'styled-components'

const CardSection = styled.section`
 h4 {
      font-size: 1.8rem;
      margin: 1rem 0;
    }
    p {
      text-align: justify;
    }
`
export const Cards = () => {

    return (
        <CardSection className="card">
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

                <small>Visit our website &#62;</small>
            </div>
        </CardSection>
    )
}