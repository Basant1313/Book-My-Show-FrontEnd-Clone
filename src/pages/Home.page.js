import React from "react";
import EntertaimentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const Homepage = () => {
    return (
        <>
        <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 pt-5">
        The Best of Entertainment
        </h1>
        <EntertaimentCardSlider />
        </div>
        </>
    );
};

export default Homepage; 