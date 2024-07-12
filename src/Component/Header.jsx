import React, { useEffect } from "react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import logo from "../assets/img/logo.png";
import { Navbar } from "../Constant";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const navbarButton = document.querySelector("#navbar");
    const menu = document.querySelector("#menu");

    const toggleMenu = () => {
      navbarButton.classList.toggle("navbar-active");
      menu.classList.toggle("hidden");
    };

    navbarButton.addEventListener("click", toggleMenu);

    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixednav = header.offsetTop;

      if (window.pageYOffset > fixednav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Cleanup event listener on component unmount
    return () => {
      navbarButton.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className="bg-[#101010] absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4 flex ">
            <div className="ml-8 lg:ml-0 flex items-center">
              <img className="mx-2 w-6 h-6 my-auto" src={logo} alt="Logo" />
              <span className="hidden font-semibold text-xl text-slate-100 lg:block py-6 pointer-events-none cursor-not-allowed">
                Kodelify
              </span>
            </div>
            <div className="flex items-center px-4 ">
              <button
                id="navbar"
                name="button"
                type="button"
                className="block absolute left-4 lg:hidden">
                <span className="line-menu transition duration-300 ease-in-out origin-top-left"></span>
                <span className="line-menu transition duration-300 ease-in-out origin-top-left"></span>
              </button>
              <nav
                id="menu"
                className="hidden absolute py-5 bg-black shadow-lg rounded-lg max-w-[250px] w-full left-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none  lg:rounded-none">
                <ul className="block lg:flex">
                  {Navbar.map((item, index) => (
                    <li className="group flex items-center">
                      <Link
                        to={item.link}
                        className="flex items-center font-semibold text-slate-500 py-2 mx-5 group-hover:text-slate-200 transition">
                        <div className="fill-slate-500 mr-2 group-hover:fill-slate-200">
                          {item.icon}
                        </div>
                        {item.page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex items-center">
            <nav id="Logsig" className="py-5 shadow-lg rounded-lg top-full">
              <ul className="flex justify-between">
                <li className="group">
                  <Link
                    to="/login"
                    className="font-bold text-[#da7ef6] py-2 mx-3 hover:text-[#d9cfff] transition">
                    Masuk
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/signup"
                    className="font-semibold text-slate-200 py-2 mx-3 bg-secondary p-6 rounded-full group-hover:bg-[#a088ff] group-hover:text-secondary transition">
                    Daftar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <input type="checkbox" id="darkmode" className="hidden" />
                        <label htmlFor="darkmode">
                            <div
                                className="text-slate-500 dark:text-slate-100 hover:text-slate-600 w-8 h-8 flex items-center justify-center lg:mr-2 mr-8 bg-transparent p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                    astro-icon="tabler:sun">
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="icon-tabler">
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <path
                                            d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"></path>
                                    </g>
                                </svg>
                            </div>
                        </label> */
}

export default Header;
