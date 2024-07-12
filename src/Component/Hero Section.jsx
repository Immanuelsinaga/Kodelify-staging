import { Link } from "react-router-dom";

const HeroSection = () => {

  return (
    <>
        <section id="home" className="text-white pt-36 pb-16 inset-0 -z-10 w-full bg-[#101010] ">
          <div className="container max-w-7xl py-5 px-4 mx-auto">
            <div className="columns-2 justify-between flex flex-wrap text-center lg:text-left">
              <div className="w-full lg:w-1/2 px-auto">
                <h1 className="font-semibold mb-2 text-4xl lg:text-7xl bg-gradient-to-r from-slate-100 via-cyan-100 to-slate-200 inline-block text-transparent bg-clip-text p-1">Code means everything</h1>
                <p className="font-light text-slate-400 text-xl mx-3">Tempat para pemrograman kompetitif menunjukan skill nya</p>
                <div class="mt-9 flex flex-row gap-4 justify-center">
                  <Link class="bg-secondary rounded-full text-white font-body font-bold py-2.5 px-12 text-sm lg:text-base lg:w-full text-center" to="/signup">Daftar</Link>
                  <Link class="bg-neutral-700 rounded-full text-white font-bold py-2.5 px-12 text-sm lg:text-base text-center lg:w-full" to="/login">Masuk</Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-auto mt-9 md:mt-3 lg:mt-7">
                <img src="https://cdn.codechef.com/images/home/coding_boy.svg" alt="" className="mx-auto shadow-xl w-3/4 mt-5 lg:-mt-5 block"/>
              </div>
            </div>
          </div>
        </section>
        
    </>
  );
}


export default HeroSection
