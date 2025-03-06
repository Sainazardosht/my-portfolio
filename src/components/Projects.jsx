import React from "react";
import Card from "./Card";
import rosee from "../assets/rosee.png";
import reen from "../assets/reen.png";
import dentalClinic from "../assets/dental clinic.png";
import large from "../assets/large.png";
import tinDog from "../assets/TinDog.png";

function Projects() {
  return (
    <section className="p-25 text-center bg-stone-100 text-slate-800">
      <h2 className="text-4xl font-semibold pb-20 font-serif">Projects</h2>
      <div className="md:grid grid-cols-3 gap-10">
        <Card
          imgURL={rosee}
          name="Rosee Project"
          URL="https://github.com/Sainazardosht/Rosee-Project/tree/master"
        />
        <Card
          imgURL={reen}
          name="Reen Project"
          URL="https://github.com/Sainazardosht/Rosee-Project/tree/master"
        />
        <Card
          imgURL={dentalClinic}
          name="Dental Clinic Project"
          URL="https://github.com/Sainazardosht/Rosee-Project/tree/master"
        />
        <Card
          imgURL={large}
          name="Large Project"
          URL="https://github.com/Sainazardosht/large"
        />
        <Card
          imgURL={tinDog}
          name="Tin Dog Project"
          URL="https://github.com/Sainazardosht/TinDog"
        />
      </div>

    </section>
  );
}

export default Projects;
