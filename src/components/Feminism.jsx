import React, {useState} from 'react'
import styled from 'styled-components'
import Fem from '../img/fem.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'
import Film from '../img/video.mp4'

const Container = styled.div`
    display:flex;
    height:100%;

    @media screen and (max-width:480px){
        flex-direction:column;
    }
`

const Left = styled.div`
    width:50%;
    position:relative;

    @media screen and (max-width:480px){
        display:none;
`

const Image = styled.img`
    display: ${(props)=>props.open && "none"};
    height: 80%;
    margin-top: 50px;
    margin-left: 50px;
`

const Video = styled.video`
    display: ${(props)=>!props.open && "none"};
    height:300px;
    position: absolute;
    top:0;
    bottom:0;
    right:0px;
    margin: auto;

    @media screen and (max-width:480px){
        width:100%;
        margin:auto;
    }
`

const Right = styled.div`
    width:50%;

    @media screen and (max-width:480px){
        width:100%;
    }

`

const Wrapper = styled.div`
    padding:50px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:480px){
        padding:20px;
        width:100%;
    }
`

const Title = styled.h1`
    
`

const Desc = styled.p`
    font-size:16px;
    margin-top:20px;

    @media screen and (max-width:480px){
        font-size:15px;
        text-align:center;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:30px;
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

    @media screen and (max-width:480px){
        margin:auto;
        margin-top:15px;

    }

`

const Icon = styled.img`
    width:20px;
    margin-right:10px;
`

const Modal = styled.div`
    width:100vw;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    
`

const CloseButton = styled.button`
    position:absolute;
    background:absolute;
    padding:5px;
    border:none;
    border-radius:5px;
    right:5px;
    top:28%;
`

const Feminism = () => {
    const [open,setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <Container>
            <Left>
                <Image open={open} src={Fem}/>
                <Video open={open} loop controls src={Film}/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>4 reasons why she is a feminist icon</Title>
                    <Desc>Kahlo is remembered for being a woman who broke all social conventions. Her defiance against needing to fit in is nothing less than admirable.
                    Despite the harsh gender equality of the 1900s, Kahlo was honest about being a woman. And that is what that puts her, even now, at the forefront of being a feminist. Never once did she hide, cower or expect to be shielded from the harsh realities of her life.
                     
                    </Desc>
                    <CardContainer>
                        <MiniCard text='Non-gender-conforming stereotypes'/>
                        <MiniCard text='Expression of experiences, struggles and inner thoughts of real women' />
                        <MiniCard text='Frida was openly bisexual'/>
                        <MiniCard text='She took charge of her life'/>
                    </CardContainer>
                    <Button onClick={()=>setOpen(true)}><Icon src={Play}/>Learn more</Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video open={open} loop controls src={Film}/>
                    <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Feminism
