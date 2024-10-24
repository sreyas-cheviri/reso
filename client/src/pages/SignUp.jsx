import React from "react";
import { Link } from "react-router-dom";
import { Label ,TextInput,Button } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-10 ">
      <div className="flex p-8 max-w-3xl mx-auto flex-col md:flex-row md:items-center md:p-10 md:gap-20">
        <div  className=" flex-1  sm:p-10 sm:h-96 ">
            <span className="font-bold bg-clip-padding  text-white px-4 py-2 bg-black rounded-lg text-4xl ">
              100x Blogs
            </span>
          <p className="text-base font-semibold mt-10">
         
Connect with fellow developers for exclusive resources and skill growth. <br /><br />Sign up now. <br />
Let’s build together!
          </p>
        </div>

        <div className="mt-10 flex-1 border p-10 rounded-md shadow-md">
          <form className="flex flex-col gap-3">
            <div>
              <Label value='Enter your Username' />
              <TextInput  className="gray-800" type='text' placeholder='Username' id='username'/>
            </div>
            <div>
              <Label value='Enter your Email' />
              <TextInput type='email' placeholder='mail@example.com' id='email'/>
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button type="submit" class="text-white bg-black hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center font-medium rounded-lg text-sm sm:text-lg px-2 py-2 sm:px-1 sm:py-1 me-2 mb-1 mt-1 w-full sm:w-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-5 text-base">
            <span>Already registered?</span>
              <Link to='/sign-in' className='text-red-500 underline font-bold'> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
