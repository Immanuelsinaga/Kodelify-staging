import React from "react";
import { newArticle } from "../Constant";

const NewArticle = () => {
  return (
    <>
      <div id="NewArticle" className="inset-0 -z-10 w-full pb-4">
        <div className="container max-w-7xl py-5 px-4 mx-auto">
          <h4 className="font-semibold text-secondary ">UPDATE</h4>
          <h2 className="font-bold text-2xl text-slate-700">
            Artikel yang terbaru dari Kodelify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
            {newArticle.map((item, index) => (
              <a href={item.href} className="block rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm">
                <img src={item.thumbnail} alt="Thumbnail" />
                <h3 className="text-slate-900 text-base font-bold tracking-tight mt-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  {item.shortDesc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArticle;
