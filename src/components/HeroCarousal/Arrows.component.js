import React from "react";



export const PrevArrow = (props) => {
    // const{className , style , onCLick} =props;
    //(...) => spread Operator is use in style and destructure it because there can be alots of style.
 return (
    <>
        <div 
        className={props.className}
        style={{...props.style, backgroundColor : "grey",padding: "20px" ,opacity:"0.6" }} 
        onClick={props.onClick}/>
    </>
 );
};
export const NextArrow = (props) => {
 return (

    <>
   <div 
        className={props.className}
        style={{...props.style, backgroundColor : "grey"}} 
        onClick={props.onClick}/>
    </>
 );
};