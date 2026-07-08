import React from 'react';
import { BrowserRouter as  Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import {darkTheme,lightTheme} from "./utils/Themes.js";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Project from './components/Projects/Project';
import Certification from './components/Certifications/Certification'
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from "react"
import ProjectDetail from './components/ProjectDetails/ProjectDetails';
import { experiences } from './data/Contants';


const Body = styled.div`
  background: ${({ theme }) => theme.bg === '#f8fafc' 
    ? 'radial-gradient(circle at top, #f1f5f9 0%, #e2e8f0 100%)' 
    : 'radial-gradient(circle at top, #1e1b4b 0%, #0f172a 100%)'};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: transparent;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <div className="hero-glow" style={{ top: '-100px', left: '-100px' }} />
          <div className="glow-bg" style={{ top: '30%', right: '-100px' }} />
          <div className="glow-bg" style={{ bottom: '15%', left: '-100px' }} />
          
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Certification />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetail openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;