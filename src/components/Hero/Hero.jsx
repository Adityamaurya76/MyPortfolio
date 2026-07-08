import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/Contants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../Assessts/person.jpg';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  overflow: hidden;
`;

const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  opacity: 0.15;
  pointer-events: none;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 60px;
  }
`;

const HeroLeft = styled.div`
  width: 100%;
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroRight = styled.div`
  width: 100%;
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 54px;
  line-height: 1.15;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.03em;
  @media (max-width: 960px) {
    font-size: 40px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const NameText = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextLoop = styled.div`
  font-weight: 700;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  color: #0b1326;
  padding: 16px 36px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0px 8px 24px rgba(221, 183, 255, 0.25);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 12px 30px rgba(221, 183, 255, 0.4);
  }
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  
  span {
    font-size: 20px;
  }
  
  &:hover {
    background: rgba(221, 183, 255, 0.1);
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.08);
  }
`;

const OrbitRing = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  border: 1px solid ${props => props.color || 'rgba(255,255,255,0.03)'};
  width: ${props => props.size}%;
  height: ${props => props.size}%;
  animation: floating 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(221, 183, 255, 0.2) 0%, rgba(173, 198, 255, 0.2) 100%);
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #171f33;
  background: #171f33;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 640px) {
    width: 220px;
    height: 220px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-cover: cover;
  filter: grayscale(80%);
  transition: all 0.5s ease;
  
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  background: rgba(34, 42, 61, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: floating 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  
  span {
    font-size: 24px;
  }
`;

function Hero() {
  return (
    <div id="about">
      <HeroContainer>
        <GridBackground>
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <defs>
              <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.05" />
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </GridBackground>
        
        <HeroInnerContainer>
          <HeroLeft>
            <Title>
              Hi, I am <br />
              <NameText>{Bio.name}</NameText>
            </Title>
            
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            
            <SubTitle>{Bio.description}</SubTitle>
            
            <ActionRow>
              <ResumeButton href={Bio.resume} target='_blank'>
                Check Resume
                <span className="material-symbols-outlined">download</span>
              </ResumeButton>
              <div style={{ display: 'flex', gap: '12px' }}>
                <IconButton href={Bio.github} target="_blank" title="GitHub">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                </IconButton>
                <IconButton href={`mailto:${Bio.email || 'aditya@example.com'}`} title="Email">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                </IconButton>
              </div>
            </ActionRow>
          </HeroLeft>

          <HeroRight>
            {/* Ambient Rings */}
            <OrbitRing size={120} delay={-1} color="rgba(221, 183, 255, 0.08)" />
            <OrbitRing size={140} delay={-3} color="rgba(173, 198, 255, 0.05)" />
            
            {/* Profile Frame */}
            <ImageWrapper>
              <ImageContainer>
                <Img src={HeroImg} alt="Aditya Maurya Profile" />
              </ImageContainer>
              
              {/* Badges */}
              <FloatingBadge top="-10px" right="-10px" delay={0} color="#ddb7ff" title="Code">
                <span className="material-symbols-outlined">code</span>
              </FloatingBadge>
              <FloatingBadge bottom="-10px" left="-10px" delay={-2} color="#adc6ff" title="Database">
                <span className="material-symbols-outlined">database</span>
              </FloatingBadge>
            </ImageWrapper>
          </HeroRight>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default Hero;