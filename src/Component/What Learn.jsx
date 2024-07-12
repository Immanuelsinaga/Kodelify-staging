import React from "react";
import { whatLearn } from "../Constant";

function WhatLearn() {
  return (
    <>
      <div id="whatLearn" className="pt-10 inset-0 -z-10 w-full pb-4">
        <div className="container max-w-7xl py-5 px-4 mx-auto">
          <h4 className="font-semibold text-secondary ">KATEGORI</h4>
          <h2 className="font-bold text-2xl text-slate-700">
            Mau belajar Apa hari ini?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
            {whatLearn.map((item, index) => (
              <a
                href="#"
                className="block rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm"
                key={index}>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg">
                  {item.icon}
                </span>
                <h3 className="text-slate-900 text-base font-bold tracking-tight mt-4">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <p className="text-slate-500 mt-2 text-sm">
                    {item.description}
                  </p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatLearn;
