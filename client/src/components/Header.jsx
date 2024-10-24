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
    <nav className="border-b-2 flex items-center justify-between p-4 relative">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-bold"
      >
        <span className="text-white px-2 py-1 bg-black rounded-lg">
          100x Blogs
        </span>
      </Link>

      {/* Search Input for larger screens */}
      <form className="hidden lg:block">
        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="border rounded-lg pl-3 pr-10 py-2 text-sm"
            style={{ outline: "none" }} // Inline style to remove default outline if necessary
          />
          <AiOutlineSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </form>

      {/* Mobile Search Icon */}
      <button className="lg:hidden w-12 h-10 flex items-center justify-center bg-gray-200 rounded-full">
        <AiOutlineSearch />
      </button>

      <div className="flex items-center gap-2">
        {/* FaMoon should now be visible on both mobile and larger screens */}
        <button className="w-12 h-10 flex items-center justify-center text-black bg-gray-200 rounded-full">
          <FaMoon />
        </button>

        <Link to="/signin">
          <button
            type="button"
            className="text-white bg-black hover:bg-gray-300 hover:text-black font-medium rounded-lg text-sm sm:text-lg px-2 py-1 sm:px-4 sm:py-1"
          >
            Signin
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

      {/* Navbar links for larger screens */}
      <div className="hidden lg:flex gap-4 items-center">
        <Link
          to="/"
          className={`${
            path === "/" ? "text-black font-bold" : "text-gray-500"
          } hover:text-black`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            path === "/about" ? "text-black font-bold" : "text-gray-500"
          } hover:text-black`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`${
            path === "/projects" ? "text-black font-bold" : "text-gray-500"
          } hover:text-black`}
        >
          Projects
        </Link>
      </div>

      {/* Collapsible menu for mobile, displayed below the navbar */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 w-full bg-white p-4 absolute left-0 top-full border-t-2">
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
            About
          </Link>
          <Link
            to="/projects"
            className={`${
              path === "/projects" ? "text-black font-bold" : "text-gray-500"
            } hover:text-black`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
