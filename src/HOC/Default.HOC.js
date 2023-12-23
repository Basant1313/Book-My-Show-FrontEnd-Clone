// HOC stands for Higher order Components
// Components Basically transforms all your props into User Interface 
// But HOC basacally tranforms all of yours components or like certain part of yours components into some other components
// adding additional extra functionalities to the other components


import React from "react"
import {Routes, Route} from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/Default.layout";
// import { Component } from "react";
// explicitly destructure the component because that's the thing i want to edit and rest of the property i spread them (..props) in case i need them or in case i use them but main is components because we are going to some substance in the components or some of entire contents in the components so we explicitly destructuring it.

// as we are using Components but it is not mentioned anywhere it basically representing our component so that is why to avoid these all errors because all the components have to start with capital letter we have tell the components and initialize with the component : Component so that we can say that (component and Component) are alias of each other and we can use a component tag with a Capital C whereever.
const DefaultHOC = ({component: Component, ...rest }) => {
    // componenent
    //props-> path
    //{...props} is renamed as {...rest } so that compiler don't get confuse after looking so much ...props.

     // <DefaultLayout> should be my parent class and <Component> should be my child class.
     //whenever you are writting components you have to put round brackets
    return (
        <>
        <Routes>
            

            <Route 
            {...rest}
            component = {(props) =>(               
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )
        }
        />
        
        </Routes>
        </>
        
    
    );
};
// we are destrucing {...props} in the route tag so that we can't miss out any properties. it is not neccessary but there is no harm in putting it
export default DefaultHOC;  