import styled from 'styled-components'

const LatestNewsSection = styled.section`
    padding:5em 0;
    background-color:#F1F5F9;
    .wrapper{ width:80%;
        margin:0 auto;
    .header{
        display:flex;
        justify-content:space-between;
        margin-bottom:2rem;
        h3{
            font-size:2rem;
        }
         a{
            font-size:28px;
            color:#3EC5F0
        }
    }
    .cards{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:3rem;
        margin:3em 0;
        .card{
            border-bottom-right-radius:12px;
            border-bottom-left-radius:12px;
            overflow:hidden;
            .cardContent{
                padding:1rem;
                background-color:#fff;
                width:100%;
                padding-bottom:2rem;
            }
            p{
                font-size:18px;
                font-weight:bold;
                padding: 1rem 0;
            }
            img{
            border-top-right-radius:12px;
            border-top-left-radius:12px;
            width:100%;
            max-width:100%;
            display:block;
            }
             a{
            font-size:18px;
            color:#3EC5F0;
        }
        }
    }
    }
    @media screen  and (max-width:768px){
    padding:2em 0;
    .wrapper{ width:100%;
        padding:2em;
    .header{
        margin-bottom:1.5rem;
        h3{
            font-size:1.5rem;
        }
         a{
            font-size:20px;
        }
    }
    .cards{
        grid-template-columns:repeat(1,1fr);
        gap:2rem;
        margin:2em 0;
        .card{
            border-bottom-right-radius:12px;
            border-bottom-left-radius:12px;
            overflow:hidden;
            p{
                font-size:16px;
            }
             a{
            font-size:16px;
        }
        }
    }
    }
    }
`

const LatestNews = () => {
    return (
        <LatestNewsSection>
            <div className="wrapper">
                <div className="header">
                    <h3>Latest News</h3>
                    <a href="#">View all</a>
                </div>
                <div className="cards">
                    {[1, 2, 3].map((item, i) => (
                        <div key={i} className="card">
                            <div className="image">
                                <img src="./images/news.svg" alt="" className="image" />
                                <div className="cardContent"><p>How to send money to Nigeria</p>
                                    <a href="#">Read All</a></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </LatestNewsSection>
    )
}

export default LatestNews