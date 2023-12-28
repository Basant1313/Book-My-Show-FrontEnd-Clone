import React from "react";
import EntertaimentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config"


const Homepage = () => {
    return (
        <>
        <div className=" flex flex-col gap-10">
        <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 pt-5">
        The Best of Entertainment
        </h1>
        <EntertaimentCardSlider />
        </div>

        <div className="bg-navColor-200 py-16 ">
           
            <div className="container mx-auto px-4">
            <div className="flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
            alt="Premiere" className="w-full h-full"/>
            </div>
             <PosterSlider images={TempPosters} title = "Premiere" subtitle = "Brand new release everyfriday " isDark />
            </div>
        </div>
        </div>
        <div className="container mx-auto px-4">
            <PosterSlider images={TempPosters} title= "Your Music Studio" isDark={false} />
        </div>
        <div className="container mx-auto px-4">
            <PosterSlider images={TempPosters} title= "Outdoor Events" isDark={false} />
        </div>
        <div className="container mx-auto px-4">
            <PosterSlider images={TempPosters} title= "Laughter Theraphy" isDark={false} />
        </div>
        </>
    );
};

export default Homepage; 