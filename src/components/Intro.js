import React from 'react'
import styled from 'styled-components'
import Frida from '../img/frida.png'
import AnimatedShapes from './AnimatedShapes';
import { Link as LinkS } from 'react-scroll';


const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;

    @media screen and (max-width:480px){
        flex-direction:column;
    } 
`;

const Left = styled.div`
    width:60%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:480px){
        width:100%;
        height:100%;
        
    } 
`

const Title = styled.h1`
    font-size: 60px;
    width: 60%;

    @media screen and (max-width: 768px){
        font-size:40px;
    }

    @media screen and (max-width:480px){
        width:100%;
        font-size:50px;
    }
`

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;

    @media screen and (max-width: 768px){
        font-size:20px;
    }

    @media screen and (max-width:480px){
        width:100%;
    }    
`

const Info = styled.div`
    width: 60%;
    display: flex;
    margin-top:50px;
`

const Button = styled(LinkS)`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    text-decoration:none;

    @media screen and (max-width:480px){
        margin:auto;
    }
`

const Right = styled.div`
    width:40%;
    @media screen and (max-width:768px){
        display:none;
    }
`

const Image = styled.img`
    width: 100%;
    
`

const Intro = () => {

    return (
        <Container>
            <Left>
                <Title>Frida Khalo</Title>
                <Desc>Mexican artist Frida Kahlo is remembered for her self-portraits, pain and passion, and bold, vibrant colors. She is celebrated in Mexico for her attention to Mexican and indigenous culture and by feminists for her depiction of the female experience and form.</Desc>
                <Info>
                    <Button
                        to='bio'
                        smooth={true}
                        duration={500}
                        exact='true'
                    >Learn more</Button>
                </Info>
            </Left>
            <Right><Image src={Frida}/></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro
