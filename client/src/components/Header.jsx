import React from "react";
import { Button, Navbar ,TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
export default function Header() {
  return (
    



    <Navbar className="border-b-2">
      
      <Link to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl  font-bold bg-clip-padding">
        <span className="  text-white px-2 py-1 bg-black rounded-lg ">RESO</span>
      </Link>
      <form>
        <TextInput type='text'
        placeholder="search"
        rightIcon ={AiOutlineSearch}
        className="hidden lg:inline"
        />  
</form>

<Button className='w-12 h-10 lg:hidden items-center'color='gray' pill>
  <AiOutlineSearch/>
</Button>
<div className="flex gap-2 md:order-2">
  <Button className="w-12 h-10 lg:inline text-black "color='gray' pill>
  <FaMoon />
  </Button>
  <Link to='/signin'>
  <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-md px-2.5 py-1.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
    Sign In
  </button>
  </Link>
  <Navbar.Toggle  className="text-gray-900"/ >
</div>
  <Navbar.Collapse>
    <Navbar.Link >
      <Link to='/'>Home</Link>
    </Navbar.Link>
    <Navbar.Link >
      <Link to='/about'>
      About</Link>
    </Navbar.Link>
    <Navbar.Link >
      <Link to='/projects'>
      Projects</Link>
    </Navbar.Link>
    
  </Navbar.Collapse>

    </Navbar>
  );
}
