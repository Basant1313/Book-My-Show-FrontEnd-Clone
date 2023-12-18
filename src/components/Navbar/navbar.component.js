import React from "react";
import { IoChevronForward } from "react-icons/io5"
import { HiChevronRight } from "react-icons/hi";
import { BiSolidChevronRight ,BiSearch} from "react-icons/bi";


// (>) - this symbol is known as chevron
//sm -> small screen;
//md -> medium device
//lg -> large screen
const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">Its All Start Here! </h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Pune  <BiSolidChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch  className="w-full h-full"/>
            </div>
        </div>
        </>
    )
};
const NavMd = () => {};
const NavLg = () => {};


// parent functional component and basically export below navbar inside it if-else condition and use above 3 components
const Navbar = () => {
    // always return in fragment(empty tag ) it is best practice.
    return (
        <>
        
        <nav className="bg-navColor-600 px-4 py-4 ">
        <div className="md:hidden">{
            /* Mobile Screen */
            <NavSm />
        }</div>
        <div className="hidden lg:hidden md:flex">{
            /* Tablet Screen -> md: flex  this is because for medium size screen it want to display it as flex container  */

        }</div>
        <div className="hidden lg: flex">{
            /* Large Screen (Desktop View )*/
           
           }</div>
        </nav>
        </>
    )

};


export default Navbar;
