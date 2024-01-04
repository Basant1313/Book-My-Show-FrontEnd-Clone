import React, {useState, useEffect}from "react";
import HeroSlider from "react-slick";

import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component
import { PrevArrow , NextArrow } from "./Arrows.component";
//follow the dcumentation of slick
const HeroCarousal = () => {

    const [images , setImages] = useState([]);

    // [] (to avoid infite rendering)-> Tne lifecyle method are  called more than once so we were using it so that they just called upon once.


    // useEffect(async() => {
    //     const getImages = await axios.get("/movie/now_playing");
    //     console.log(getImages);
    // }, []);
    

    // Reason of doing below is because when we rendered everything before we use the async function.
    
    // fallback of async function is when async funtion is not yeilding any data or the data is not getting fetched then basically the async function is awaited and promises is made will get back to you whenever the data is fetched .

    // we are avoiding that we are creating our own function and let us suppose whenever the data is fetched then only we will the function. unneccesssaaryly we will not make a promise and entire async task wait till the entire data is fetched.  

    
    // better method - very helpful in production level projects.
    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            console.log(getImages);
        };
        requestNowPlayingMovies();
    }, []); 

    

    // Courosel Setting for Large Screen

    // centerMode and centerPadding are added here to to make carousel so that  1 image at center and 1 image from both side will 300px of with on screen.
    const settingsLg = {
        arrows: true,
        dots: true,
        autoplay: true,
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding : "200px",
        infinite : true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />


    }

    const settings = {
        
        // This setting is for medium and small screen
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
};


return (
    //Putting our logic inside <HeroSlider> tag
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {
            // The entire array (const images) does not that element inside it are image addresses it s just treat them as array elements so we refering each element as image and basically we will be rendering each images inside our source
            images.map((image) => (
                <div className="w-full h-64 md:h-80 py-3 ">
                    <img src = {image} alt="testing" className="w-full h-full rounded-lg" />

                </div>
            ))

        }

    </HeroSlider>
    
    </div>


    <div className="hidden lg:block">
    <HeroSlider {...settingsLg}>
        {
            // The entire array (const images) does not that element inside it are image addresses it s just treat them as array elements so we refering each element as image and basically we will be rendering each images inside our source
            images.map((image) => (
                <div className="w-full h-80 px-2 py-3 ">
                    <img src = {image} alt="testing" className="w-full h-full rounded-md" />

                </div>
            ))

        }

    </HeroSlider> 

    </div>


    
    </>
    );
    

};

export default HeroCarousal;

