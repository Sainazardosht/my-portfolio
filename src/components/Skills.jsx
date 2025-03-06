import React from "react";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import github from "../assets/github.svg";
function Skills() {
  return (
    <div className="px-12 py-20 text-center bg-stone-200 text-slate-800">
      <h2 className="text-4xl font-semibold font-serif">Skills</h2>
      <div className="h-1 bg-orange-500 m-20"></div>
      <div className="flex justify-center">
        <div className="lg:flex lg:justify-center lg:items-center md:grid md:grid-cols-3 grid grid-cols-2 gap-20">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
          <img src={tailwind} alt="tailwind css" />
          <img src={github} alt="github" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
