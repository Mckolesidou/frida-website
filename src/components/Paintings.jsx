import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Title = styled.span`
    font-size:50px;

    @media screen and (max-width:480px){
        font-size:40px;
        text-align:center;
    }
`

const SubTitle = styled.span`
    font-size:20px;
    color:black;
    margin-top:20px;
    margin-bottom:20px;

    @media screen and (max-width:480px){
        font-size:20px;
        text-align:center;
    }
`

// const Desc = styled.p`
//     font-size:15px;
//     color:#777;
//     margin-top:5px;
// `



const Paintings = () => {
    return (
        <Container>
            <Title><b>Frida Kahlo Paintings</b></Title>
            <SubTitle> Frida Kahlo is remembered for her self-portraits, pain and passion, and bold, vibrant colors </SubTitle>
            {/* <Desc>Life experience is a common theme in Kahlo's approximately 200 paintings, sketches and drawings.</Desc>
            <Desc>Her physical and emotional pain are depicted starkly on canvases, as is her turbulent relationship </Desc>
            <Desc>with her husband, fellow artist Diego Rivera, who she married twice. Of her 143 paintings, 55 are self-portraits.</Desc> */}
            <ImgSlider />
            
            <AnimatedShapes />
        </Container>
    )
}

export default Paintings
