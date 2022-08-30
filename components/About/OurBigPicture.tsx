import styled from 'styled-components'

const Section = styled.section`
display:flex;
align-items:center;
flex-direction:column;
background-color:#EDF6F9;
  .left,.right{
        display:grid;
    grid-template-columns:1fr 2fr;
    justify-content:space-between;
    direction:
  }
  .right{   
      position:relative;
      height:50rem;
      width:100%;
      background:#EDF2FB;
      .rightContent{
        z-index:2;
        color:white;
        position: absolute;
        right: 0%;
        top: 25%;
        transform: translate(-20%,0%);
        max-width:500px;
        h2 {
        font-size:2.5rem;
        margin-bottom:2rem;
      }
      p{
          font-size:1.2rem;
          line-height:2rem;
      }

      }
  }
  .left{
      position:relative;
      height:50rem;
      .leftContent{
        display:flex;
        place-content:center;
        flex-direction:column;
       padding-left:5em;
          z-index:4;
      }
      h2{
          font-size:3rem;
          margin-bottom:2rem;
      }
      p{
          font-size:1.4rem;
          line-height:2rem;
      }
  }
    .images{
    display: block;
    height: 50rem;
    position: absolute;
    right: 0;
    width: 50rem;
    background-color: #3ec5f0;
    border-top-left-radius: 50rem;
    bottom: 0;
    }
    .images1{
    display: block;
    height: 50rem;
    position: absolute;
    right: 0;
    width: 50rem;
    background-color: #0A014F;
    border-bottom-left-radius: 50rem;
    bottom: 0;
    }
@media screen  and (max-width:1100px){
      .left{
      position:relative;
      height:40rem;
      padding:4em 0;
      .leftContent{
       padding:2em;
       text-align:justify;
       width:30rem

      }
  }
}
    @media screen  and (max-width:768px){
         .left,.right{
    display:grid;
    grid-template-columns:1fr;
    flex-direction:column
  }
  .right{
      position:relative;
      height:40rem;
      width:100%;
        display:flex;
        place-content:center;
        flex-direction:column;
      background:#0A014F;
      padding:0 3em;
      .rightContent{
        color:white;
        position: static;
        transform: translate(0);
        max-width:100%;
       text-align:justify;

        h2 {
        font-size:2.2rem;
        margin-bottom:1.5rem;
      }
      p{
          font-size:1rem;
          line-height:2rem;
      }

      }
  }
  .left{
      position:relative;
      height:40rem;
      padding:4em 0;
      width:30rem;
      .leftContent{
       padding:2em;
       text-align:justify;
    
      }
      h2{
          font-size:2.5rem;
          margin-bottom:1.5rem;
      }
      p{
          font-size:1.2rem;
          line-height:2rem;
      }
  }
    .images{
    display: none;
    }
    .images1{
    display: none;
    }
    }
    @media screen  and (max-width:450px){
      .left{
      position:relative;
      height:40rem;
      padding:4em 0;
      width:100%;
      .leftContent{
       padding:2em;
       text-align:justify;

      }
      h2{
          font-size:2.5rem;
          margin-bottom:1.5rem;
      }
      p{
          font-size:1.2rem;
          line-height:2rem;
      }
  }
    }
`

const OurBigPicture = () => {
    return (
        <Section >
            <div className="left">
                <div className="leftContent">
                    <h2> Our big picture</h2>
                    <p> We envision becoming recognized as a brand that offers solutions to businesses and end users in every sector of life irrespective of race, tribe, or nationality. </p>
                </div>
                <span className='images' ></span>
            </div>
            <div className="right">
                <div>
                    <div className="rightContent">
                        <h2>How do we get there</h2>
                        <p> By utilizing cutting-edge technologies and providing the greatest value, we are dedicated to bringing our clients creative solutions and effective implementation. We are making sure that there is a service and solution that can be used by all industries and addresses at least 10 SDGs.
                        </p>
                    </div></div>
                <span className='images1' ></span>
            </div>
        </Section>
    )
}

export default OurBigPicture