import React from 'react';
import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/Contants';
import { useTheme } from 'styled-components';

const Nav = styled.div`
    background-color: rgba(11, 19, 38, 0.4);
    backdrop-filter: blur(16px);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:active {
        transform: scale(0.95);
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
    
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.primary};
        transition: width 0.3s ease;
    }
    
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    
    &:hover::after {
        width: 100%;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
      background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
      color: #0b1326;
      border-color: transparent;
      box-shadow: 0px 4px 15px rgba(221, 183, 255, 0.4);
      transform: translateY(-2px);
  }
  
  &:active {
      transform: translateY(0);
  }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: rgba(19, 27, 46, 0.95);
    backdrop-filter: blur(16px);
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <div style={{ display: "flex", alignItems: "center", fontWeight: "800", cursor: 'pointer' }}>
            DevPortfolio
          </div>
        </NavLogo>
        
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#certification'>Certifications</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileMenuLink>
            <MobileMenuLink href='#certification' onClick={() => setIsOpen(!isOpen)}>Certifications</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileMenuLink>
            <MobileMenuLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileMenuLink>
            <GitHubButton 
              style={{ padding: '10px 16px', width: 'max-content', marginTop: '10px' }} 
              href={Bio.github} 
              target="_blank"
            >
              GitHub Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
