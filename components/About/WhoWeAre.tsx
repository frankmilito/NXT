
import styled from 'styled-components'

const Section = styled.section`
    position:relative;
    display:grid;
    grid-template-columns:1fr 1.2fr;
    padding:2em 4em;
    margin-bottom:6em;
    color:#0A014F;
    .left{
        display:grid;
        grid-template-columns:1fr 1fr;
    }
    .right{
        margin-top:4em;
        width:90%;
    }
    .title{
        text-transform:uppercase;
        font-weight:bold;
        font-size:1.8em;
        line-height:2em;
    }
    .subtitle{
        font-size:2em;
        margin:.5em 0;
    }
    .content{
        font-size:1.2em;
        color:#373435;
        line-height:1.8em;
        margin-bottom:1em;
    }
    img{
        max-width:100%;
        display:block;
        border-radius:1em;
    }
          .image1{
        margin-top:15em;
    }
    .btn{
     background-color: transparent;
    border: 1px solid #373435;
    border-radius: 1rem;
    color: #373435;
    font-size: 1rem;
    font-weight: 500;
    padding: 1.5rem 3rem;
    }
    @media screen  and (max-width: 1100px){
grid-template-columns:1.4fr 1fr;
    }
    @media screen and (max-width: 868px){
    grid-template-columns:1fr;
    padding:1em 2em;
    margin-bottom:3em;
    }
     .left{
        display:flex;
        align-items: center;
        gap:2em;
        justify-content: center;

    }
    .right{
        margin-top:1em;
        width:100%;
    }
    img{
      height:80%;
    }
        .image1{
        margin-top:0;
    }
      .right{
        margin-top:2em;
        width:100%;
    }
    .title{
        font-size:1.5em;
        line-height:2em;
        text-align:center;
        width:100%;
        display:block;
    }
    .subtitle{
        font-size:1.5em;
        text-align:justify;
    }
    .content{
        font-size:1em;
        line-height:1.8em;
        margin-bottom:1em;
        text-align:justify;

    }
    .btn{
        width:100%;
    }
    @media screen  and (max-width: 450px){
        img{
            width:100%;
        }
     .left{
         flex-direction:column;
     }
    }
`
const WhoWeAre = () => {
    return (
        <Section>
            <div className="left">
                <img className="image" src="./images/team1.svg" alt="" />
                <img className="image1" src="./images/team2.svg" alt="" />
            </div>
            <div className="right">
                <span className="title">Who we are</span>
                <p className="subtitle">NXT is a developing company with a remarkable group of young people </p>
                <p className='content'>who are driven to use technology to develop the finest solutions, provide world-class digital transformation, address business issues, and raise consumer happiness. </p>
                <button className='btn'>Read More</button>

            </div>
        </Section>
    )
}

export default WhoWeAre