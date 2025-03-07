import React from "react";
import { useEffect } from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import github from "../assets/github.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  return (
    <div className="px-12 py-20 text-center bg-stone-200 text-slate-800">
      <h2 className="text-4xl font-semibold font-serif">Skills</h2>
      <div className="h-1 bg-orange-500 m-20"></div>
      <div className="flex justify-center">
        <div className="lg:flex lg:justify-center lg:items-center md:grid md:grid-cols-3 grid grid-cols-2 gap-20">
          <img src={html} alt="html" data-aos='fade-right'/>
          <img src={css} alt="css" data-aos='fade-right'/>
          <img src={js} alt="js" data-aos='fade-right'/>
          <img src={react} alt="react" data-aos='fade-left'/>
          <img src={tailwind} alt="tailwind css" data-aos='fade-left'/>
          <img src={github} alt="github" data-aos='fade-left'/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
