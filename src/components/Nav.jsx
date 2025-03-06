import React, { useState } from 'react';
import logo from "../assets/logo.png";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {NavLink} from "react-router-dom";
// colors: stone-100 slate-800
function Nav (){
        const [clicked,setClick] =useState(false);
        const ClickChanger =() => {
            setClick(!clicked);
        };
    return (
        <header className='flex flex-row justify-between items-center px-16 py-5 bg-stone-100 text-slate-800 sticky z-1000 top-0 border-b-3 border-stone-600'>
            <div className='logo w-10'><img src={logo} alt="logo" /></div>
            <div className="navbars">
            <button className="cursor-pointer md:hidden text-slate-800" onClick={ClickChanger}><ArrowDropDownCircleIcon className='m-2'/>Menu</button>
            <nav>
            <ul
          className={`overflow-hidden transition-all duration-500 ease-in-out flex-col md:flex md:flex-row md:gap-10 ${
            clicked ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100`}
        >
                    <li className='hover:text-orange-500 transition ease-out duration-200 font-xl text-slate-800'><NavLink to="/" className='transition ease-out duration-500'>Home</NavLink></li>
                    <li className='hover:text-orange-500 transition ease-out duration-200 font-xl text-slate-800'><NavLink to="/about" className='transition ease-out duration-500'>About</NavLink></li>
                    <li className='hover:text-orange-500 transition ease-out duration-200 font-xl text-slate-800'><NavLink to="/skills" className='transition ease-out duration-500'>Skills</NavLink></li>
                    <li className='hover:text-orange-500 transition ease-out duration-200 font-xl text-slate-800'><NavLink to="/projects" className='transition ease-out duration-500'>Projects</NavLink></li>
                    <li className='hover:text-orange-500 transition ease-out duration-200 font-xl text-slate-800'><NavLink to="/contact" className='transition ease-out duration-500'>Contact</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Nav;