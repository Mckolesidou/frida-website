import React from 'react'
import styled from 'styled-components'
import Steve from '../img/steve.jpg'

const Container = styled.div`
    
    height=100%;
    background: url(${Steve}); 
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    
`;

const Wrapper = styled.div`
    height:100%;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:480px){
        flex-direction:column;
    }
`;

const FormContainer = styled.div`
    width:57%;
    @media screen and (max-width:480px){
        width:100%;
    }
`;

const Title=styled.h1`
    margin:50px;
    // margin-top:0;
    @media screen and (max-width:480px){
        margin:20px;
    }
`;

const Form =styled.form`
    height:410px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:480px){
        flex-direction:column;
    }
`

const LeftForm=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-right:20px;

    @media screen and (max-width:480px){
        height:50%;
        margin-right:0;
    }
`;

const RightForm=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:480px){
        width:50%;
        align-items:center;
    }
`;

const Input=styled.input`
    width:300px;
    padding:20px;
    margin-bottom:41px;

    @media screen and (max-width:480px){
        padding:5px;
    }
`;

const TextArea = styled.textarea`
    width:300px;
    height:100%;
    padding:20px;

    @media screen and (max-width:480px){
        padding:5px;
        margin-top:20px;
        height:30%;
    }
`;

const Button = styled.button`
    border:none;
    padding:15px;
    background-color:darkblue;
    color:white;
    font-size:20px;
    border-radius:10px;
    margin-top:20px;
    cursor:pointer;

    @media screen and (max-width:480px){
        padding:5px;
        font-size:14px;
        width:40%;
    }
`;



const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Contact us! <br /> Feel free to send us any questions, concerns, or information.</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Your name"></Input>
                            <Input placeholder="Your email"></Input>
                            <Input placeholder="Subject"></Input>
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Your message" />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
            </Wrapper>            
        </Container>
    )
}

export default Contact
