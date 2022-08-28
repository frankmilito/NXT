import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:0 4em;
    margin-bottom:10em;
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
                    <h2>10,000</h2>
                    <p>Customers around Africa</p>
                </div>
                <div>
                    <h2>60 +</h2>
                    <p>Employees in Nigeria</p>
                </div>
                <div>
                    <h2>20 </h2>
                    <p>Partners in Africa</p>
                </div>
                <div>
                    <h2> 4</h2>
                    <p>Investment in Africa</p>
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero