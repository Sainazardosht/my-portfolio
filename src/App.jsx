// import './App.css'
import "@fontsource/roboto";
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { dividerClasses } from "@mui/material";
function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<><Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      </>} />
        <Route path="/about" element={<><About />
      <Skills />
      <Projects />
      <Contact />
      </>} />
        <Route path="/skills" element={<><Skills />
      <Projects />
      <Contact /></>} />
        <Route path="/projects" element={<><Projects />
          <Contact /></>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />  */}
      
    </BrowserRouter>
  )
}

export default App
