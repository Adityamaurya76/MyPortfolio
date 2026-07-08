import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    max-width: 380px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        transform: translateY(-8px);
        border-color: rgba(221, 183, 255, 0.3);
        box-shadow: 0 20px 40px -20px rgba(183, 109, 255, 0.15);
        background: rgba(255, 255, 255, 0.05);
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${Card}:hover & {
        transform: scale(1.05);
    }
`;

const HoverOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(11, 19, 38, 0.95) 0%, rgba(11, 19, 38, 0.3) 100%);
    display: flex;
    align-items: flex-end;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    ${Card}:hover & {
        opacity: 1;
    }
`;

const OverlayText = styled.span`
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    span {
        font-size: 18px;
        transition: transform 0.3s ease;
    }
    
    ${Card}:hover & span {
        transform: translateX(4px);
    }
`;

const InfoSection = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 12px;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Tag = styled.span`
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 9999px;
    background: ${props => props.bgColor || 'rgba(221, 183, 255, 0.1)'};
    color: ${props => props.color || '#ddb7ff'};
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.3;
`;

const DateText = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary}80;
    font-weight: 500;
    margin-top: -4px;
`;

const Description = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 4px;
`;

function ProjectCards({ project, setOpenModal }) {
  const getTagColor = (tag, idx) => {
    const colorPairs = [
      { text: '#ddb7ff', bg: 'rgba(221, 183, 255, 0.1)' },
      { text: '#adc6ff', bg: 'rgba(173, 198, 255, 0.1)' },
      { text: '#4cd7f6', bg: 'rgba(76, 215, 246, 0.1)' }
    ];
    return colorPairs[idx % colorPairs.length];
  };

  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <ImageContainer>
        <Image src={project.image} alt={project.title} />
        <HoverOverlay>
          <OverlayText>
            View Details
            <span className="material-symbols-outlined">arrow_forward</span>
          </OverlayText>
        </HoverOverlay>
      </ImageContainer>
      
      <InfoSection>
        <Tags>
          {project.tags?.map((tag, index) => {
            const colors = getTagColor(tag, index);
            return (
              <Tag key={index} color={colors.text} bgColor={colors.bg} className="font-mono">
                {tag}
              </Tag>
            );
          })}
        </Tags>
        
        <Title>{project.title}</Title>
        <DateText className="font-mono">{project.date}</DateText>
        <Description>{project.description}</Description>
      </InfoSection>
    </Card>
  );
}

export default ProjectCards;