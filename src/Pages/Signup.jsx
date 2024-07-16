import Header from "../Component/Header";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";

const Signup = () => {
  return(
    <div style={{ backgroundColor: '#101010', minHeight: '100vh' }}>
      <Helmet>
        <title>Sign Up - Kodelify</title>
      </Helmet>
      <Header/>
      <section id="home" className="text-white pt-36 pb-16 inset-0 -z-10 py w-full">
        <div className="container max-w-7xl py-5 px-4 mx-auto flex justify-center items-center">
          <div className="w-full text-center">
            <h1 className="text-slate-100 text-3xl font-bold text-center mb-9">Sign Up to Kodelify</h1>
            <div className="relative">
              <form className="mx-auto flex justify-center items-center">
                <div class="relative">
                  <div class="absolute start-0 flex items-center pointer-events-none"></div>
                    <p className="text-left my-2 font-semibold">Username</p>
                    <input type="text" id="username" class="block w-full px-3 py-2.5 text-white border border-gray-300 rounded-lg bg-[#0a0a0a] focus:ring-blue-500 focus:border-white " />
                    <p className="text-left my-2 font-semibold">Name</p>
                    <input type="text" id="nickname" class="block w-full px-3 py-2.5 text-white border border-gray-300 rounded-lg bg-[#0a0a0a] focus:ring-blue-500 focus:border-white " />
                    <p className="text-left my-2 font-semibold">Email</p>
                    <input type="email" id="pwd" class="block w-full px-3 py-2.5 text-white border border-gray-300 rounded-lg bg-[#0a0a0a] focus:ring-blue-500 focus:border-white " />
                    <p className="text-left my-2 font-semibold">Password</p>
                    <input type="password" id="cpwd" class="block w-full px-3 py-2.5 text-white border border-gray-300 rounded-lg bg-[#0a0a0a] focus:ring-blue-500 focus:border-white " />
                    <p className="text-left my-2 font-semibold">Confirm Pasword</p>
                    <input type="password" id="login" class="block w-full px-3 py-2.5 text-white border border-gray-300 rounded-lg bg-[#0a0a0a] focus:ring-blue-500 focus:border-white " />
                    <button type="submit" className="text-black bg-[#ffffff] hover:bg-[#cdcdcd] font-medium rounded-lg text-md px-32 py-2.5 text-center inline-flex items-center mt-4 mb-2">
                    Sign Up
                </button>
                </div>
              </form>
              <hr class="h-px my-3 bg-gray-700 border-0 w-80 mx-auto"/>
              <div>
                <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-16 py-2.5 text-center inline-flex items-center">
                  <FaGoogle  className="mr-3" />
                  Login with Google
                </button>
              </div>
              <p className="font-medium text-sm my-2">ohh udah punya akun? <Link className="text-blue-500 underline" to='/login'>login disini</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
