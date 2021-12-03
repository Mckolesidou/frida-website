import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes';
import Bio from '../img/biogra.png';

const Container = styled.div`
    display:flex;
    height:100%;

    @media screen and (max-width:480px){
        flex-direction:column;
    }
`

const Left = styled.div`
    width:30%;
    

    @media screen and (max-width:480px){
        display:none;
`

const Image = styled.img`
    width:90%;
    margin: 150px 0 150px 50px;
    
`

const Right = styled.div`
    width:70%;
    

    @media screen and (max-width:480px){
        width:100%;
    }

`

const Wrapper = styled.div`
    align-items:center;
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
    font-size:17px;
    margin-top:60px;

    @media screen and (max-width:480px){
        font-size:10px;
        text-align:center;
    }
`



const Biography = () => {
    return (
        <Container>
            <Left>
                <Image src={Bio} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Frida Kahlo Biography</Title>
                    <Desc>Considered one of Mexico's greatest artists, Frida Kahlo was born on July 6, 1907 in Coyocoan, Mexico City, Mexico. She grew up in the family's home where was later referred to as the Blue House or Casa Azul. Her father is a German descendant and photographer. He immigrated to Mexico where he met and married her mother Matilde. Her mother is half Amerindian and half Spanish. Frida Kahlo has two older sisters and one younger sister.
                          Frida Kahlo has poor health in her childhood. She contracted polio at the age of 6 and had to be bedridden for nine months. This disease caused her right leg and foot to grow much thinner than her left one. She limped after she recovered from polio. She has been wearing long skirts to cover that for the rest of her life. Her father encouraged her to do lots of sports to help her recover. She played soccer, went swimming, and even did wrestle, which is very unusual at that time for a girl. She has kept a very close relationship with her father for her whole life.
                          Frida Kahlo attended the renowned National Preparatory School in Mexico City in the year of 1922. There are only thirty-five female students enrolled in that school and she soon became famous for her outspokenness and bravery. At this school she first met the famous Mexican muralist Diego Rivera for the first time. Rivera at that time was working on a mural called The Creation on the school campus. Frida often watched it and she told a friend she will marry him someday. In the same year, Kahlo joined a gang of students who shared similar political and intellectual views. She fell in love with the leader Alejandro Gomez Arias. On a September afternoon when she traveled with Gomez Arias on a bus the tragic accident happened. The bus collided with a streetcar and Frida Kahlo was seriously injured. A steel handrail impaled her through the hip. Her spine and pelvis are fractured and this accident left her in a great deal of pain, both physically and physiologically.                   
                    </Desc>
                </Wrapper>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Biography
