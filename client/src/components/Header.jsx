import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl  font-bold bg-clip-padding"
      >
        <span className="  text-white px-2 py-1 bg-black rounded-lg ">
          100x Blogs
        </span>
      </Link>
      <form style={{ outline: "none" ,
        
      }} > 
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          style={{ outline: "none" }} // Inline style to remove default outline if necessary
        />
      </form>

      <Button className="w-12 h-10 lg:hidden items-center" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 lg:inline text-black " color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <button
            type="button"
            class="text-white bg-black hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm sm:text-lg px-1 py-1 sm:px-4 sm:py-1 me-2 mb-1 mt-1 w-full sm:w-auto dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Signin
          </button>
        </Link>

        <Navbar.Toggle />
</div>
<Navbar.Collapse>
  <Navbar.Link
    as={"div"}
    className={`${path === "/" ? "text-black font-bold" : "text-gray-500"} hover:text-black`}
  >
    <Link className={`hover:text-black`}  to="/">Home</Link>
  </Navbar.Link>
  <Navbar.Link
    as={"div"}
    className={`${path === "/about" ? "text-black font-bold" : "text-gray-500"} hover:text-black`}
  >
    <Link className={`hover:text-black`}  to="/about">About</Link>
  </Navbar.Link>
  <Navbar.Link
    as={"div"}
    className={`${path === "/projects" ? "text-black font-bold" : "text-gray-500"} hover:text-black`}
  >
    <Link className={`hover:text-black`} to="/projects">Projects</Link>
  </Navbar.Link>
</Navbar.Collapse>

    </Navbar>
  );
}
