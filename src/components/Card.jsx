import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card(props) {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  return (
    <a
      href={props.URL}
      className="m-5 rounded-lg overflow-hidden bg-stone-100 text-stone-900 grid md:grid-cols-2 justify-center align-center gap-7 shadow-sm hover:shadow-lg hover:transition ease-out duration-500"
      data-aos="zoom-out"
    >
      <div>
        <img src={props.imgURL} alt="project images" className="w-full" />
      </div>
      <div className="flex flex-col justify-between">
        <h4 className="text-xl font-semibold py-3">{props.name}</h4>
        <p className="text-left px-5 py-3">{props.about}</p>
        <h4 className="text-l font-semibold py-3">
          Technologies: {props.tech}
        </h4>
        <a
          href={props.URL}
          target="_blank"
          className="text-md p-2 text-orange-500 hover:underline  hover:decoration-solid transition ease-out duration-500 rounded-md "
        >
          Explore More
        </a>
      </div>
    </a>
  );
}
export default Card;
