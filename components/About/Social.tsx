import styled from 'styled-components'

const SocialSection = styled.section`
    margin:8em 0;
    .wrapper{
        margin:0 auto;
        width:75%;
        display:grid;
        gap:3rem;
        grid-template-columns:repeat(2,1fr);
        h2{
            font-size:48px;
            margin-bottom:2.5rem;
        }
        p{
            font-size:18px;
            line-height:28px;
            margin-bottom:2rem;
        }
        a{
            font-size:28px;
            color:#3EC5F0
        }
    }
`
const Social = () => {
    return (
        <SocialSection>
            <div className="wrapper">
                <div className="leftSection">
                    <img src="./images/social.svg" alt="" className='logo' />
                </div>
                <div className="rightSection">
                    <h2>Coperate Social Responsibitlies</h2>
                    <p>We are passionate about engaging in activities that benefit our society and the environment. By doing so, we become more aware of our surroundings and are more equipped to offer solutions as they are needed across all sectors of the economy. </p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </SocialSection>
    )
}

export default Social