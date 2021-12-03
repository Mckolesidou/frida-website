import React, {useState} from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'
import Bio from '../img/bio.png'

const Container = styled.div`
    height: 100%;
    display: flex;
`;

const Left = styled.div`
    width:40%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:480px){
        display:none;
    }
`

const Right = styled.div`
    width:60%;

    @media screen and (max-width:480px){
        width:100%;
        text-align:center;
    }
`

const Image = styled.img`
    width: 100%;
    
    
`

const QuoteContainer = styled.div`
    // width:60%;
    // margin:auto;
    //height:100vh;
    padding:50px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:480px){
        width:100%;
    }

`

const Title = styled.h1`
    
`

const Card =styled.div`
    width: 100%;
    height: 200px;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    background-color:#ffe6e6;
    

    @media screen and (max-width:480px){
        overflow:scroll;
        font-size:15px;
        height:300px;
    }
`

const Name = styled.div`
    padding:10px;
    text-align: center;
`

const Button = styled.button`
    width: 180px;
    border:none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    letter-spacing: 2px;
    font-size: 15px;
    padding: 15px;
    margin-top:50px;
    cursor: pointer;
    display: flex;
    align-items:center;

`

const Quotes = () => {

    const [quotes,setQuotes] = useState([]);
    const [randomQuote,setRandomQuote] = useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://my-frida-api.herokuapp.com/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random()*data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote =()=>{
        let randIndex = Math.floor(Math.random()*quotes.length);
        setRandomQuote(quotes[randIndex])
    }

    return (
        <>
        <Container>
          <Left><Image src={Bio} /></Left>
            <Right>
                <QuoteContainer>
                    <Title>Frida Khalo Quotes</Title>
                    <Card>
                    {randomQuote ? (
                                        <>
                                        <h5>&quot;{randomQuote.text}&quot;</h5>
                                        <Name>{randomQuote.author || "No author"}</Name>
                                        </>
                                    ) : (   
                                    <h2>Loading</h2> 
                                    )}
                    </Card>
                    <Button onClick={getNewQuote}>New Quote</Button>                                                          
                </QuoteContainer>
            </Right>            
        </Container>        
        <AnimatedShapes />
        </>
    )
}

export default Quotes
