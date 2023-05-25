import styled from "styled-components";


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        max-width:230px;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        box-sizing: border-box;
        
        a{
            display: contents;
        }

        h2{
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 700;
            padding-bottom: 2rem;
        }

        p{
            line-height: 1.5rem;
            padding-bottom: 2rem;
        }

        :nth-child(1){
            padding-bottom: 2rem;
        }

       
    }

    img{
        width: 90vw;
    }

    @media (min-width: 425px){
        img{
            max-width: 600px;
        }
    }

    

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        justify-content: space-around;
    }
`;



const Background = styled.div`
    background-image: linear-gradient(180deg, white 20%, #A3000020 );
    padding: 4rem 2rem ;

    @media (min-width: 1024px){
        background-image: linear-gradient(90deg, #B80000 , #A3000000 50% );
    }
`;



export default function Photo(props) {
    return(
        <Background>
            <section>
                <Content>
                    <div>
                        <h2>{props.data}</h2>
                        <p>{props.text}</p>
                            
                    </div>
                    <img src={props.img}/>
                </Content>
            </section>
        </Background>

    )
}