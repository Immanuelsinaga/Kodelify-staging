import Header from "../Component/Header";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  return(
    <div style={{ backgroundColor: '#101010', minHeight: '100vh' }}>
      <Helmet>
        <title>Login - Kodelify</title>
      </Helmet>
      <Header/>
      <section id="home" className="text-white pt-36 pb-16 inset-0 -z-10 py w-full">
        <div className="container max-w-7xl py-5 px-4 mx-auto flex justify-center items-center">
          <div className="w-full text-center">
            <h1 className="text-slate-100 text-3xl font-bold text-center mb-9">Log in to Kodelify</h1>
            <div className="relative">
              <div className="mb-2">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-md px-16 py-2.5 text-center inline-flex items-center mb-2">
                  <FaGithub className="mr-3" />
                  Login with Github
                </button>
              </div>
              <div>
                <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-16 py-2.5 text-center inline-flex items-center">
                  <FaGoogle  className="mr-3" />
                  Login with Google
                </button>
              </div>
              <hr class="h-px my-8 bg-gray-700 border-0 w-80 mx-auto"/>
              <form className="mx-auto flex justify-center items-center">
                <div class="relative">
                  <div class="absolute start-0 flex items-center pointer-events-none"></div>
                    <input type="login" id="login" class="block w-full px-3 py-2.5 text-white border border-gray-300 rounded-lg bg-[#0a0a0a] focus:ring-blue-500 focus:border-white " placeholder="Masukan Email atau Username" />
                    <button type="button" className="text-black bg-[#ffffff] hover:bg-[#cdcdcd] font-medium rounded-lg text-md px-32 py-2.5 text-center inline-flex items-center my-2">
                    Login
                </button>
                </div>
              </form>
              <p className="font-medium text-sm ">Kamu belum punya akun? <Link className="text-blue-500 underline" to='/signup'>daftar disini</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
