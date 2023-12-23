import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component
import { PrevArrow , NextArrow } from "./Arrows.component";
//follow the dcumentation of slick
const HeroCarousal = () => {

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



    const images = [

    
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1702972923076_nowweb.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1703158443878_timmyweb.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1703162228341_web.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1701330082291_raeethdesktop.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1703159413936_varungroverdesktop.jpg"
    ]

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

