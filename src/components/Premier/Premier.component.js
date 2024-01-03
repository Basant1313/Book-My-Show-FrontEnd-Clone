import React from "react";
import Slider from "react-slick";


//component
import Poster from "../Poster/poster.component";

//config
import settings from "../../config/PosterCarousel.config";

//images
import PremierImages from "../../config/TempPostersPremier.config";

export const Premier = () => {

    
 // {...image} it will basically take all of the property of the image and spread it . And we don't need to pass individual property.
    return(
        <>
        <div className="flex flex-col items-start py-4 ">
            <h3 className="text-xl font-bold text-white ">Premieres</h3>
            <p className="text-white text-sm ">Brand new release every Friday</p>
            </div>

        <Slider {...settings} /*PosterCarousel.config rendered here */>
            {
                PremierImages.map((image) =>(
                    <Poster {...image} /*TempPoster.confign rendered here*/ isDark  />
                    ))
                }
        </Slider>
        </>
    );
};

export default Premier;