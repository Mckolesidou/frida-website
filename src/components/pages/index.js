import styled, {
    css
  } from "styled-components";
  import Intro from "../Intro";
  import Paintings from "../Paintings";
  import Feminism from "../Feminism";
  import Quotes from "../Quotes";
  import Contact from "../Contact";
  import Footer from "../Footer";
  import { BrowserRouter as Router } from "react-router-dom";
  import Home from "../Home";
  import Biography from "../Biography";
  import { homeObjFive, homeObjFour, homeObjOne, homeObjSix, homeObjThree, homeObjTwo } from "../Data";
  
  
  const Container = styled.div `
      height:100vh;  
      overflow: hidden;
      position:relative;
  `
  
  const Shape = css `
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
  `
  
  const IntroShape = styled.div `
    ${Shape}
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
  `
  
  const PaintingsShape = styled.div `
    ${Shape}
    clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
    background-color: pink;
  `
  
  const FemShape = styled.div `
    ${Shape}
    clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
    background-color: #f88497;
  `
  
  const QuotShape =styled.div`
    ${Shape}
    clip-path: polygon(0% 0%, 33% 0%, 50% 100%, 0% 100%);
    background-color: #ff4d4d;
  `
  
  const BioShape = styled.div`
    ${Shape}
    clip-path: polygon(33% 0, 12% 50%, 33% 100%, 0 100%, 0% 50%, 0 0);
    background-color:  #ff8080;
  `

  const HomeAll = () => {

    const smallScreen = window.screen.width <= 480 ? true : false;
  
    return ( 
      <>
          <Container {...homeObjOne}>
            <Home />
            <Intro />
            <IntroShape />
          </Container> 
          <Container {...homeObjTwo} >
            <Paintings />
            <PaintingsShape />
          </Container> 
          <Container {...homeObjThree}>
            <Feminism />
            {!smallScreen && <FemShape />}
          </Container>
          <Container {...homeObjFour}>
            <Biography />
            <BioShape />
          </Container>
          <Container {...homeObjFive}>
            <Quotes />
            <QuotShape />
          </Container>
          <Container {...homeObjSix}>
            <Contact />
            <Footer />
          </Container>
      </>
    );
  };
  
  export default HomeAll;