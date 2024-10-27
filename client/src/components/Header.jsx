import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-center "> 
      <nav className="border-2 m-2 border-gray-500 shadow-lg rounded-md flex items-center w-full max-w-4xl justify-between p-4 relative bg-white"> {/* Centered nav with max width */}
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-bold"
        >
          <span className="text-white px-2 py-1 bg-black rounded-lg">
            100x IQs
          </span>
        </Link>

        {/* Search Input for larger screens */}
        <form className="hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              className="border rounded-lg pl-3 pr-10 py-2 text-sm focus:border-black focus:ring-0 outline-none"
            />
            <AiOutlineSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </form>

        {/* Mobile Search Icon */}
        <button className="lg:hidden w-12 h-10 flex items-center  justify-center bg-gray-200 rounded-full">
          <AiOutlineSearch />
        </button>
        
        <div className="hidden lg:flex gap-4 items-center">
  <Link
    to="/"
    className={`${
      path === "/" ? "text-black font-bold " : "text-gray-500"
    } hover:text-black `}
  >
    Home
  </Link>
  <Link
    to="/about"
    className={`${
      path === "/about" ? "text-black font-bold " : "text-gray-500"
    } hover:text-black `}
  >
    Qs
  </Link>
</div>


        <div className="flex items-center gap-2">
          {/* FaMoon should now be visible on both mobile and larger screens */}
          <button className="md:w-10 md:h-10 sm:w-8 sm:h-8 p-2 flex items-center justify-center text-black bg-gray-200 rounded-full">
  <FaMoon className="text-sm md:text-xl" />
</button>


          <Link to="/signin">
            <button
              type="button"
              className="text-white bg-black hover:bg-slate-400 hover:text-black font-medium rounded-lg text-sm sm:text-lg px-2 py-1 sm:px-4 sm:py-1"
            >
              Sign in
            </button>
          </Link>

          {/* Hamburger menu for mobile */}
          <button
            className="lg:hidden w-12 h-10 flex items-center justify-center"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Collapsible menu for mobile */}
        {isOpen && (
          <div className="border-2 rounded-md border-gray-500 lg:hidden flex flex-col gap-4 mt-4 w-full bg-white p-4 absolute left-0 top-full border-t-2">
            <Link
              to="/"
              className={`${
                path === "/" ? "text-black font-bold" : "text-gray-500"
              } hover:text-black`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                path === "/about" ? "text-black font-bold" : "text-gray-500"
              } hover:text-black`}
              onClick={toggleMenu}
            >
              Qs
            </Link>
            
          </div>
        )}
      </nav>
    </div>
  );
}
