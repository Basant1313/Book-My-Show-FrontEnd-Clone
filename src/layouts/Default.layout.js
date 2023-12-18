import React from "react";
//component
import Navbar from "../components/Navbar/navbar.component"


const DefaultLayout = (props) => {
    // Along with the parent component <DefaultLayout> child component shuould also be rendered To make sure all components are also rendered we have put {props.children}  below your main TAG.
    return (
        <>
        <Navbar />
        {props.children}
        
        </>
    );
};

export default DefaultLayout;