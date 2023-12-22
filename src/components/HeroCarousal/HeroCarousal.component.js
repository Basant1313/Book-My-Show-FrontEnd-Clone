import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//follow the dcumentation of slick
const HeroCarousal = () => {

    // Courosel Setting for Large Screen

    // centerMode and centerPadding are added here to to make carousel so that  1 image at center and 1 image from both side will 300px of with on screen.
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding : "300px",
        infinite : true

    }

    const settings = {
        
        // This setting is for medium and small screen
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
};



    const images = [

    
     "https://images.unsplash.com/photo-1585951237313-1979e4df7385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1614839380062-9378f1f170a8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1534188278934-76700c2da08b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1445251836269-d158eaa028a6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    <img src = {image} alt="testing" className="w-full h-full rounded-md" />

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
                <div className="w-full h-96 px-2 py-3 ">
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

