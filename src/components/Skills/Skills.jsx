import React from 'react';
import styled from "styled-components";
import { skills } from '../../data/Contants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 20px;
  @media (max-width: 960px) {
    padding: 40px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  &:hover {
    border-color: rgba(221, 183, 255, 0.3);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px rgba(183, 109, 255, 0.1);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SkillIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.bgColor};
  color: ${props => props.iconColor};
  
  span {
    font-size: 24px;
  }
`;

const SkillTitleText = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: #171f33;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  cursor: default;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary}80;
    transform: scale(1.03);
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

function Skills() {
  const getHeaderStyle = (title) => {
    switch (title.toLowerCase()) {
      case 'frontend':
        return {
          icon: 'terminal',
          bg: 'rgba(221, 183, 255, 0.15)',
          color: '#ddb7ff'
        };
      case 'backend':
        return {
          icon: 'database',
          bg: 'rgba(173, 198, 255, 0.15)',
          color: '#adc6ff'
        };
      default:
        return {
          icon: 'category',
          bg: 'rgba(76, 215, 246, 0.15)',
          color: '#4cd7f6'
        };
    }
  };

  return (
    <Container id='skills'>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of the technical proficiencies I've developed through years of engineering, focusing on scalable architectures and fluid user experiences.
        </Desc>
        
        <SkillsContainer>
          {skills.map((item, idx) => {
            const style = getHeaderStyle(item.title);
            return (
              <SkillCard key={idx}>
                <SkillHeader>
                  <SkillIconWrapper bgColor={style.bg} iconColor={style.color}>
                    <span className="material-symbols-outlined">{style.icon}</span>
                  </SkillIconWrapper>
                  <SkillTitleText>{item.title}</SkillTitleText>
                </SkillHeader>
                
                <SkillList>
                  {item.skills.map((skill, sIdx) => (
                    <SkillItem key={sIdx}>
                      <SkillImage src={skill.image} alt={skill.name} />
                      <span className="font-mono">{skill.name}</span>
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            );
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;