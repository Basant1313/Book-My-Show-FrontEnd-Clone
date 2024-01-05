
// Entire Carousel and Slider inside the PosterSlider.js.

import React from "react";



import settings from "../../config/PosterCarousel.config";

import Slider from "react-slick";
import Cast from "../Cast/Cast.components";


const CastSlider = (props)  => {
    return (
        <>
         <div className="flex flex-col items-start py-4 ">
            <h3 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
            <p className={`text-sm font-bold ${props.isDark ? "text-white": "text-gray-800"}`}>{props.sutitle}</p>
            </div>

        <Slider {...settings} /*PosterCarousel.config rendered here */>
            
            {
                props.images.map((image) =>(
                    <Cast {...image} /*TempCast.config rendered here*/ isDark = {props.isDark}/>
                    ))
                }
          
        </Slider>
        </>
    )
}

export default CastSlider;