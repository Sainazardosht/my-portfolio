import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200, once: true });
      }, []);
    return (
        <div className='m-5 py-1 border-slate-800 border-2 rounded-lg overflow-hidden bg-slate-800 text-stone-100' data-aos='zoom-out'>
        <img src={props.imgURL} alt="project images" className='border-b-1'/>
        <h4 className='text-xl font-semibold py-3'>{props.name}</h4>
        <p className='text-left px-5 py-3'>{props.about}</p>
        <h4 className='text-l font-semibold py-3'>Technologies: {props.tech}</h4>
        <a href={props.URL} target="_blank" className='text-md p-2 text-orange-500 hover:bg-orange-500 hover:text-stone-100 transition ease-out duration-500 rounded-md '>Explore More in GitHub</a>
        </div>
    )
}
export default Card;