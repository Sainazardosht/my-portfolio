import React from "react";
import Card from "./Card";
import rosee from "../assets/rosee.png";
import reen from "../assets/reen.png";
import dentalClinic from "../assets/dental clinic.png";
import large from "../assets/large.png";
import tinDog from "../assets/TinDog.png";
import weather from "../assets/weather.png";
import healthyfood from "../assets/healthyfood.png";
function Projects() {
  return (
    <section className="sm:p-25 p-10 text-center bg-stone-100 text-slate-800">
      <h2 className="text-4xl font-semibold pb-20 font-serif">Projects</h2>
      <div className="md:grid grid-cols-3 gap-10">
      <Card
          imgURL={healthyfood}
          name="Healthy food menu!"
          about="Healthy Restaurant is a fully responsive and modern web application built using React and CSS Media Queries. It features a diverse selection of healthy meals categorized by breakfast, lunch, and dinner, each tailored with specific portion recommendations for leg day, upper body day, and rest days. The app offers a smooth and user-friendly experience across all devices—from mobile to desktop. With its clean code structure, modular components, and elegant design, this project serves as a great example of a functional and visually appealing UI focused on nutritious eating."
          tech="React, Create React App, CSS"
          URL="https://healthy-food-menu.vercel.app/"
        />
        
        <Card
          imgURL={weather}
          name="Weather web app"
          about="A responsive weather web application that allows users to search for real-time weather data. The app fetches data from a public weather API using Axios and displays dynamic weather conditions such as temperature, humidity, wind speed, and more with clean and modern UI powered by Tailwind CSS. It supports error handling, loading states, and mobile responsiveness to provide a seamless user experience across devices."
          tech="React, Tailwind CSS, Axios"
          URL="https://github.com/Sainazardosht/weather"
        />
        <Card
          imgURL={large}
          name="Large – News & Blog Template"
          about="A clean and structured news-style blog layout designed for editorial platforms, digital magazines, or content-heavy websites. This project leverages HTML5, Bootstrap for responsive grid and navigation, custom CSS for branding and layout styling, and FontAwesome for sleek iconography. It includes a multi-column header, expandable navbar, featured blog post section, and categorized articles, ensuring both readability and modern design."
          tech="HTML, CSS, Bootstrap, FontAwesome"
          URL="https://github.com/Sainazardosht/large"
        />
        <Card
          imgURL={rosee}
          name="Rosee Project"
          about="A modern, responsive landing page designed for a holistic marketing brand. Built with semantic HTML5 structure, Bootstrap for layout and responsiveness, and FontAwesome for icons, the page showcases a clean and elegant design with multiple sections such as services, featured blog, Instagram gallery, and a marketing masterclass CTA. This project demonstrates strong attention to responsive UI/UX, organized layout structuring, and visual storytelling."
          tech="HTML, CSS, Bootstrap, FontAwesome"
          URL="https://github.com/Sainazardosht/Rosee-project"
        />
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
          imgURL={tinDog}
          name="Tin Dog"
          about="TinDog is a fun, interactive dog dating application designed to help dogs meet new friends or find love nearby. Inspired by human dating apps, TinDog brings a unique twist by connecting dogs within a community where they can socialize, communicate, and bond."
          tech="HTML, CSS, BootStrap"
          URL="https://github.com/Sainazardosht/TinDog"
        />
      </div>
    </section>
  );
}

export default Projects;
