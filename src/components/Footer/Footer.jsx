import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/Contants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background-color: #060e20;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 10;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const Logo = styled.h2`
  font-weight: 800;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
  letter-spacing: -0.02em;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary}a0;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.3s ease;
  text-decoration: none;
  
  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>DevPortfolio</Logo>
        
        <Copyright className="font-mono">
          &copy; {new Date().getFullYear()} DevPortfolio. Built with precision.
        </Copyright>
        
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" title="LinkedIn">
            <svg viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </SocialMediaIcon>
          
          <SocialMediaIcon href={Bio.github} target="_blank" title="GitHub">
            <svg viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialMediaIcon>
        </SocialMediaIcons>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;