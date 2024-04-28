import React from 'react';
import { BrowserRouter as  Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import {darkTheme,lightTheme} from "./utils/Themes.js";
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Skills from './components/Skills/Skills.js';
import Education from './components/Education/Education.js';
import Project from './components/Projects/Project.js';
import Certification from './components/Certifications/Certification.js'
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import { useState, useEffect } from "react"
import ProjectDetail from './components/ProjectDetails/ProjectDetails.js';


const Body= styled.div`
background-color : ${({theme}) => theme.bg};
width:100%;
height:100%;
overflow-x:hidden;
`;

 
 const Wrapper = styled.div`
  background: linear-gradient(38.73deg,
 rgba(204, 0, 187, 0.15) 0%,
 rgba(201, 32, 184, 0) 50%),
 linear-gradient(141.27deg,
 rgba(0, 70, 209, 0) 50%, 
 rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
       <Navbar/>
      <Body>
     <Hero/>
     <Wrapper>
     <Skills/>
     <Certification/>
     </Wrapper>
     <Project openModal={openModal} setOpenModal={setOpenModal}/>
     <Wrapper>
      <Education/>
      <Contact/>
     </Wrapper>
     <Footer/>
     {openModal.state &&
            <ProjectDetail openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App