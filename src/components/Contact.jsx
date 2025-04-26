import React from "react";
import bgImage from "../assets/bg2.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Contact(){
    return (
    <div className="flex justify-center md:py-25 py-0 md:border-t-0 border-t-1 border-slate-800" style={{backgroundImage: `url(${bgImage})`}}>
        <footer className="p-12 text-center bg-stone-700 text-stone-100 w-200">
            <h2 className="md:text-8xl font-bold py-20 text-4xl font-serif">Get in Touch</h2>
            <p className="text-xl text-stone-100 px-5">I am always excited to work on new projects. Whether you have a question or want to discuss your project, feel free to reach out!</p>
            <div className="pt-10 ">
            <a href="https://www.instagram.com/sun.zardosht/profilecard/?igsh=MXJqZ3U5MW1mNWw5bw==" target="_blank" className="text-slate-800 hover:opacity-50"><InstagramIcon className="m-5"/></a>
            <a href="https://www.linkedin.com/in/saina-zardosht-68aa67312" target="_blank" className="text-slate-800 hover:opacity-50 transition ease-in-out duration-500"><LinkedInIcon className="m-5"/></a>
            <a href="https://github.com/Sainazardosht" target="_blank" className="text-slate-800 hover:opacity-50 transition ease-in-out duration-500"><GitHubIcon className="m-5"/></a>
            </div>
        </footer>
    </div>
    )
}
export default Contact;