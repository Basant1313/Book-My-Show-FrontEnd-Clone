import React from "react";
//pros -> src , title , subtitle m isDark(bool)


// below functional component is for single poster
// when we have conflict between single and double quotes we use backtick
const Poster =  (props) => {

    return(
        <>
        <div className="flex flex-col items-start gap-2 px-3 ">
            <div className="h-80">
                <img src={props.src} alt="Title Poster " className="w-full h-full rounded-xl" />
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
            {props.title}
            </h3>
            <p className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-700 "}`}>{props.subtitle}</p>
        </div>
        
        </>
    )

};


export default Poster;