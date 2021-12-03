import React from 'react';
import styled from "styled-components";
import {Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {FaBars} from 'react-icons/fa'

const Container = styled.nav`
    height:50px;
    // font-size:1rem;
    // position:fixed;
    // top:0;
    // z-index:10;
    

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-item: center;
    justify-content: space-between;
`;

const Logo = styled.h1 `
    font-weight: bold;
    text-decoration: underline crimson;
`;

const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:768px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

const Menu = styled.ul`
    display: flex;
    list-style:none;
    align-items:center;
    margin-left:30px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
`;

const NavLinks = styled(LinkS)`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    text-decoration:none;    
`;



const Button = styled.nav`
    

    @media screen and (max-width:768px){
        display:none;
    }
`;

const BtnLink = styled(LinkR)`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    outline:none;
    text-decoration:none;
    white-space:nowrap;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color:crimson;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Frida</Logo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <Menu>
                        <MenuItem>
                            <NavLinks to='home'>Home</NavLinks>
                        </MenuItem>
                        <MenuItem>
                            <NavLinks to='paintings'>Paintings</NavLinks>
                        </MenuItem>
                        <MenuItem>
                            <NavLinks to='feminism'>Feminism</NavLinks>
                        </MenuItem>
                        <MenuItem>
                            <NavLinks to='bio'>Biography</NavLinks>
                        </MenuItem>
                        <MenuItem>
                            <NavLinks to='quotes'>Quotes</NavLinks>
                        </MenuItem>
                        <MenuItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </MenuItem>
                    </Menu>
                </Left>
                <Button>
                    <BtnLink to='/join'>JOIN TODAY</BtnLink>
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
