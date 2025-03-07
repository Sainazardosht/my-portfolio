import React from "react";
import { useEffect } from "react";
import img from "../assets/home.svg";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
      AOS.init({ duration: 1000, offset: 200, once: true });
    }, []);
  return (
    <div className="p-20 h-170 flex md:flex-row flex-col justify-between items-center gap-25 text-center w-full object-cover bg-stone-200">
      <div className=" md:h-100 flex flex-col justify-center gap-10" data-aos='fade-right'>
        {" "}
        <h1 className="md:text-6xl font-bold text-slate-800 drop-shadow-lg text-4xl font-serif">
          Saina Zardosht
        </h1>
        <h3 className="md:text-4xl font-bold text-orange-500 text-2xl font-serif">
          Front-End Developer
        </h3>
      </div>
      <div className="h-100" data-aos='fade-left'>
        <img src={img} alt="home image" className="w-full max-w-xs md:max-w-md"/>
      </div>
    </div>
  );
}

export default Home;
