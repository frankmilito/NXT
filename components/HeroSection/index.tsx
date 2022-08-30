import React from 'react'
import styled from 'styled-components'
import CountUp from "react-countup";

const HeroSection = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:0 4em;
    margin-bottom:10em;
    margin-top:5em;
    img{
        width:100%;
    }
    h1{
        font-size:5em;
        font-weight:bold;
        color:#0A014F;
        margin-top:2em;
        margin-bottom:.5em
    }
    .hero-section{
        width:800px;
        text-align: center;
        margin-bottom: 4em;
        .subtitle{
            font-size:1.5em;
        }
    }
    .span{
        position: relative;
        width:100%;
        .underline-image{
            max-width:100%;
            width:300px;
            position: absolute;
            bottom: 0;
            left: 20px;
        }
    }
    .group_analysis{
        /* display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:2em; */
        display:flex;
        justify-content:space-between;
        width:80%;
        margin:2em auto;
        h2{
            font-size:2em
        }
    }
     @media screen  and (max-width: 768px){
    padding:0 2em;
    margin-bottom:4em;
    h1{
        font-size:2em;
        margin-top:1em;
        margin-bottom:.3em
    }
     .hero-section{
        width:100%;
        text-align: center;
        margin-bottom: 2em;
        .subtitle{
            font-size:1.1em;
        text-align: justify;

        }
    }
    img{
        max-width:100%;
    }
      .group_analysis{
        width:100%;
        margin:2em auto;
         display:grid;
        grid-template-columns:repeat(2,1fr);
        h2{
            font-size:1em;
            text-align:center;
            margin-bottom:1rem;

        }
        p{
            font-size:15px;
            text-align:center;

        }
    }
 }
 @media screen  and (max-width:450px){
      .group_analysis{
        grid-template-columns:repeat(1,1fr);
        gap:1em;
    }
 }
`
const Hero = () => {
    return (
        <HeroSection>
            <div className="hero-section">
                <h1>We Incubate, Invest
                    & Drive <span className='span'>value <img src="./images/underline.svg" className='underline-image' alt="" /></span></h1>
                <p className='subtitle'>Creating a wealth of opportunities to scale
                    substainable impact providing world class solution to every sector
                    of the african market.</p>
            </div>
            <div className='group_media'>
                <img src="./images/group.svg" alt="" />
            </div>
            <div className='group_analysis'>
                <div>
                    <h2><CountUp end={10000} duration={9} /></h2>
                    <p>Customers around Africa</p>
                </div>
                <div>
                    <h2><CountUp end={60} duration={6} /> +</h2>
                    <p>Employees in Nigeria</p>
                </div>
                <div>
                    <h2><CountUp end={20} duration={5} /> </h2>
                    <p>Partners in Africa</p>
                </div>
                <div>
                    <h2> <CountUp end={4} duration={4} /></h2>
                    <p>Investment in Africa</p>
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero