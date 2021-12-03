import React from 'react'
import '../Paintings.css'
import { useState } from 'react'
import Slider from "react-slick";
import Diego from '../img/diego.jpg'
import Memory from '../img/memory.jpg'
import Monkey from '../img/monkey.png'
import Monkeys from '../img/monkeys.png'
import Parrots from '../img/parrots.jpg'
import Velvet from '../img/velvet.jpg'
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"


const images = [Diego, Memory, Monkey, Monkeys, Parrots, Velvet]


const ImgSlider = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className = 'arrow next' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className = 'arrow prev' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);
    const small = window.matchMedia('(max-width:1180px)');

    const settings = {
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>,
        beforeChange:(current , next) => setImageIndex(next),
    };

    if (small.matches){
        settings.slidesToShow = 1;
    }

    return (
        <>
        <div className = "Paintings">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx===imageIndex?"slide activeSlide":"slide"}>
                        <img src={img} alt={img} />
                        <p></p>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    )
}

export default ImgSlider
