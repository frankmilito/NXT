import styled from 'styled-components'

const CardSection = styled.section`

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
    @media screen  and (max-width:768px){
         h4 {
      font-size: 1.4rem;
      margin-bottom:1em;
    }
      p {
      font-size: 14px;
      line-height:1.5em
    }
    }
`
type CardProps = {
    image: string
    content: string
    title: string
}
export const Cards = ({ title, content, image }: CardProps) => {

    return (
        <CardSection className="card">
            <div className="image">
                <img src={image} alt="" className="nxtImage1" />
            </div>
            <div className="cardContent" >
                <h4>{title}</h4>
                <p>
                    {content}
                </p>

                <p className='link'>Visit our website &#62;</p>
            </div>
        </CardSection>
    )
}