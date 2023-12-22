import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi";
import {
  BiSolidChevronRight,
  BiSearch,
  BiMenu,
  BiSolidChevronDown,
} from "react-icons/bi";
import { Input } from "postcss";
import loogo from "./bookmyshow-logo-vector.svg"

// (>) - this symbol is known as chevron
//sm -> small screen;
//md -> medium device
//lg -> large screen
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Its All Start Here! </h3>
          <span className="text-gray-400 text-xs flex items-center">
            Pune <BiSolidChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  /* input tag by giving type = search .it will give cross symbol which is not present in the type = text  when you start typing the cross symbol will appear 
    2. before applying focus:outline-none a yellow border was there in search bar but when applied focus: outline-none the yellow border dissapear(removed)*/
  return (
    <>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm ">
        <BiSearch />
        <input
          type="search"
          className=" focus: outline-none w-full"
          placeholder="Search for movies, events, plays, sports and activities"
        />
      </div>
    </>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex item-center w-1/2">
          <div className="w-12 h-12">
            <img src={loogo} alt="Logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm ">
            <BiSearch />
            <input
              type="search"
              className=" focus: outline-none w-full"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>

        <div className="flex item-center gap-3">
          <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            Pune <BiSolidChevronDown />
          </span>

          <button className="bg-red-600 text-white px-2 py-1 rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

// parent functional component and basically export below navbar inside it if-else condition and use above 3 components
const Navbar = () => {
  // always return in fragment(empty tag ) it is best practice.
  return (
    <>
      <nav className="bg-navColor-600 px-4 py-4 ">
        <div className="md:hidden">
          {
            /* Mobile Screen */
            <NavSm />
          }
        </div>
        <div className="hidden lg:hidden md:flex">
          {
            /* Tablet Screen -> md: flex  this is because for medium size screen it want to display it as flex container  */
            /* <NavMd /> => its is called as rendering */
            <NavMd />
          }
        </div>
        <div className="hidden lg:flex">
          {/* Large Screen (Desktop View )*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
