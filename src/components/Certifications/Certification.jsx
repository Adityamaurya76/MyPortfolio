import React from 'react';
import styled from 'styled-components';
import { certification } from '../../data/Contants';

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
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.tertiary}, ${({ theme }) => theme.primary}, transparent);
    transform: translateX(-50%);
    opacity: 0.2;
    @media (max-width: 768px) {
      left: 20px;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  position: relative;
  width: 100%;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 45px;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.color};
  box-shadow: 0 0 15px ${props => props.color};
  z-index: 10;
  transition: all 0.3s ease;
  
  ${TimelineItem}:hover & {
    transform: translate(-50%, -50%) scale(1.3);
    box-shadow: 0 0 25px ${props => props.color};
  }
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translateY(-50%);
  }
`;

const Card = styled.div`
  width: 45%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: rgba(76, 215, 246, 0.3);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 30px rgba(76, 215, 246, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.08;
  color: ${({ theme }) => theme.text_primary};
  pointer-events: none;
  
  span {
    font-size: 64px;
  }
  
  ${Card}:hover & {
    opacity: 0.2;
    color: ${({ theme }) => theme.tertiary};
  }
`;

const TopSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_secondary};
  
  span {
    font-size: 28px;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const CompanyText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.tertiary};
  margin-top: 2px;
`;

const DateText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary}a0;
  margin-top: 4px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
`;

const SkillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const SkillChip = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(76, 215, 246, 0.08);
  border: 1px solid rgba(76, 215, 246, 0.15);
  color: ${({ theme }) => theme.tertiary};
`;

const DocLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  
  span {
    font-size: 18px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.secondary};
    transform: translateX(3px);
  }
`;

function Certification() {
  const getTimelineColor = (idx) => {
    const colors = ['#4cd7f6', '#ddb7ff', '#adc6ff'];
    return colors[idx % colors.length];
  };

  return (
    <Container id="certification">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          As a developer, I continuous build upon my skills. Here are the professional certifications I have earned.
        </Desc>
        
        <TimelineContainer>
          {certification.map((cert, index) => {
            const align = index % 2 === 0 ? 'left' : 'right';
            const color = getTimelineColor(index);
            return (
              <TimelineItem key={cert.id} align={align}>
                <TimelineNode color={color} />
                <Card>
                  <CardIcon>
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </CardIcon>
                  
                  <TopSection>
                    <CompanyLogo>
                      <span className="material-symbols-outlined">verified</span>
                    </CompanyLogo>
                    <HeaderInfo>
                      <RoleName>{cert.role}</RoleName>
                      <CompanyText>{cert.company}</CompanyText>
                      <DateText className="font-mono">{cert.date}</DateText>
                    </HeaderInfo>
                  </TopSection>
                  
                  <Description>{cert.desc}</Description>
                  
                  {cert.skills && (
                    <SkillGroup>
                      {cert.skills.map((skill, sIdx) => (
                        <SkillChip key={sIdx} className="font-mono">{skill}</SkillChip>
                      ))}
                    </SkillGroup>
                  )}
                  
                  {cert.doc && (
                    <DocLink href={cert.doc} target="_blank">
                      Verify Credential
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </DocLink>
                  )}
                </Card>
              </TimelineItem>
            );
          })}
        </TimelineContainer>
      </Wrapper>
    </Container>
  );
}

export default Certification;