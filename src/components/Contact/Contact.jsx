import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Bio } from '../../data/Contants';

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

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text_secondary};
`;

const Input = styled.input`
  background: #0b0f1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px rgba(221, 183, 255, 0.1);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background: #0b0f1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  resize: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px rgba(221, 183, 255, 0.1);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  color: #0b1326;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(221, 183, 255, 0.15);
  
  span {
    font-size: 20px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(221, 183, 255, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ImageCard = styled.div`
  height: 240px;
  border-radius: 30px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  div.bg-image {
    width: 100%;
    height: 100%;
    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA00gXBo-fXnrKYSges9sOd6IL5kcZfKw1rlQZU0f8Zu-VUpYB_3KCH8ATCsWDrPAEtDgJK3gfZCQXI3Nk_HNKLVf4JGURLd2IB8hdrbCAgTeIYzl8szPtfv6ofMtVoYITqDnREPk8uintA97SdSgCqMkh2MZ9iVoGMXBP160ibrYEIf6VRgRJ5cqOjuktFDEt4L_shrdK2xCEaYSeTCYsdYIOCvptMpa_z-As8_0u6PG1mQO6L4au');
    background-size: cover;
    background-position: center;
    transition: transform 0.7s ease;
  }
  
  &:hover div.bg-image {
    transform: scale(1.08);
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0b1326c0 0%, transparent 100%);
  }
`;

const ImageBadge = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(221, 183, 255, 0.2);
  color: ${({ theme }) => theme.primary};
  border: 1px solid rgba(221, 183, 255, 0.3);
  border-radius: 9999px;
  padding: 4px 14px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 5;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const InfoIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(221, 183, 255, 0.1);
  border: 1px solid rgba(221, 183, 255, 0.15);
  color: ${({ theme }) => theme.primary};
  
  span {
    font-size: 22px;
  }
`;

const InfoLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text_secondary};
`;

const InfoValue = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 2px;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIconLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  text-decoration: none;
  
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

function Contact() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hnf6gu8', 'service_w9pnbuw', form.current, 'luMc5kjzk2VZrE3tl')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions!</Desc>
        
        <ContentGrid>
          {/* Form Left */}
          <FormCard>
            <FormTitle>
              Email Me 🚀
            </FormTitle>
            <Form ref={form} onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input placeholder="John Doe" name="user_name" id="name" required />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input placeholder="john@example.com" name="user_email" id="email" required type="email" />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea placeholder="Tell me about your project..." name="message" id="message" rows="5" required />
              </FormGroup>
              
              <SubmitButton type="submit">
                Send Message
                <span className="material-symbols-outlined">send</span>
              </SubmitButton>
            </Form>
          </FormCard>
          
          {/* Sidebar Right */}
          <Sidebar>
            <ImageCard>
              <div className="bg-image" />
              <ImageBadge className="font-mono">Available for Work</ImageBadge>
            </ImageCard>
            
            <InfoCard>
              <InfoItem>
                <InfoIcon>
                  <span className="material-symbols-outlined">mail</span>
                </InfoIcon>
                <div>
                  <InfoLabel className="font-mono">Email</InfoLabel>
                  <InfoValue>
                    <a href={`mailto:${Bio.email || 'adityamaurya76lko@gmail.com'}`}>{Bio.email || 'adityamaurya76lko@gmail.com'}</a>
                  </InfoValue>
                </div>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon style={{ color: '#adc6ff', background: 'rgba(173, 198, 255, 0.1)' }}>
                  <span className="material-symbols-outlined">location_on</span>
                </InfoIcon>
                <div>
                  <InfoLabel className="font-mono">Location</InfoLabel>
                  <InfoValue>Lucknow, India</InfoValue>
                </div>
              </InfoItem>
              
              <Divider />
              
              <SocialGroup>
                <InfoLabel className="font-mono">Social Ecosystem</InfoLabel>
                <SocialIcons>
                  <SocialIconLink href={Bio.linkedin} target="_blank" title="LinkedIn">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </SocialIconLink>
                  
                  <SocialIconLink href={Bio.github} target="_blank" title="GitHub">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </SocialIconLink>
                </SocialIcons>
              </SocialGroup>
            </InfoCard>
          </Sidebar>
        </ContentGrid>
        
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
}

export default Contact;
