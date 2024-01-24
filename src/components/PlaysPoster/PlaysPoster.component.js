import React from "react";
//pros -> src , title , subtitle m isDark(bool)


// below functional component is for single poster
// when we have conflict between single and double quotes we use backtick
const PlaysPoster =  (props) => {

    return(
        <>
        <div className="flex flex-col items-center gap-2 px-3 ">
            <div className="h-36">
                <img src={props.src} alt="Title Poster " className="w-full h-full rounded-md" />
            </div>
            <h3 className={`text-lg  ${props.isDark ? "text-white": "text-black"}`}>
            {props.title}
            </h3>
            <p className={`text-sm ${props.isDark ? "text-white":"text-gray-500"}`}>{props.subtitle}</p>
        </div>
        
        </>
    )

};


export default PlaysPoster;