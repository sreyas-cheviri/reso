import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex flex-col p-4 max-w-4xl mx-auto md:p-10 md:gap-10">
        
        {/* Header */}
        <div className="flex justify-center ">
          <div className='max-w-4xl w-full text-center'>
            <h1 className='font-bold text-4xl sm:text-3xl md:text-5xl'>100x Interview Questions to Become a 100x Dev📝</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-8 md:mt-3 flex-1 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-8 rounded-md shadow-xl bg-white border-2 border-gray-500">
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Enter your Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Enter your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="mail@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-black hover:bg-slate-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm sm:text-lg px-4 py-2 mt-4 w-full"
              >
                Sign Up
              </button>
            </form>
            <div className="flex gap-2 mt-5 text-base">
              <span>Already registered?</span>
              <Link to="/sign-in" className="text-red-500 underline font-bold"> Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
