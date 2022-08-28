
import styled from 'styled-components'

const Section = styled.section`
    display:grid;
    grid-template-columns:1fr 1.2fr;
    padding:2em 4em;
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
        margin-bottom:1em
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