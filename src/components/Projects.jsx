import React from "react";
import Card from "./Card";
import rosee from "../assets/rosee.png";
import reen from "../assets/reen.png";
import dentalClinic from "../assets/dental clinic.png";
import large from "../assets/large.png";
import tinDog from "../assets/TinDog.png";

function Projects() {
  return (
    <section className="sm:p-25 p-10 text-center bg-stone-100 text-slate-800">
      <h2 className="text-4xl font-semibold pb-20 font-serif">Projects</h2>
      <div className="md:grid grid-cols-3 gap-10">
        
        <Card
          imgURL={reen}
          name="Reen Project"
          about="A resposive website built with clean HTML and CSS, designed with a modern layout for showcasing content effectively."
          tech="HTML, CSS, Bootstrap"
          URL="https://github.com/Sainazardosht"
        />
        <Card
          imgURL={dentalClinic}
          name="Dental Clinic Project"
          about="A professional website for a dental clinic, featuring smooth animations, responsive design, and a contact form."
          tech="HTML, CSS, JavaScript, Bootstrap"
          URL="https://github.com/Sainazardosht"
        />
        <Card
          imgURL={large}
          name="Large Project"
          about="A mini web project focused on layout and styling practice, showcasing responsive design and clean structure."
          tech="HTML, CSS, JavaScript"
          URL="https://github.com/Sainazardosht"
        />
        <Card
          imgURL={rosee}
          name="Rosee Project"
          tech="HTML, CSS, React, Javascript"
          URL="https://github.com/Sainazardosht"
        />
        <Card
          imgURL={tinDog}
          name="Tin Dog Project"
          tech="HTML, CSS, BootStrap"
          URL="https://github.com/Sainazardosht"
        />
      </div>

    </section>
  );
}

export default Projects;
