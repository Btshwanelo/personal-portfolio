import React from 'react';
import styled from 'styled-components';
import { useNav } from '../hooks/useNav';

const About = ({ handleClick }) => {
  const aboutRef = useNav('About');

  return (
    <Container ref={aboutRef} id="aboutContainer">
      <Wrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <ContentWrapper>
          <h2>
            About <strong>Me</strong>
          </h2>
          <LeadText>
            Innovative, taks-driven proffesional with 5+ years of experience in
            web development.
          </LeadText>
          <p>
            Equipped with a record of success in consistently identifying and
            providing the technological needs of companies through ingenious
            innovation.
          </p>
          <p>
            Proficient in developing databases, creating user interfacces,
            writing and testing codes, troubleshooting simple/complex issues,
            and implementing new features based on user feedback.
          </p>
          <p>Frontend: HTML, CSS, JAVASCRIPT, React, Nextjs (SSR, SSG), Sass, React-Native(Expo), PWA </p>
          <p>Backend: Node.js, MongoDB, REST API and Microservices</p>
          <p>Tooling: -TDD Development Git, GitHub, Docker Webpack, CI/CD, ESLint, AWS CDK</p>
          <ButtonWrapper>
            <HireMeButton onClick={handleClick}>Hire Me</HireMeButton>
            <CVButton
              href="/file/goodwill_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </CVButton>
          </ButtonWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  width: 60%;
  padding-right: 3rem;
`;

const Image = styled.div`
  max-width: 100%;
  min-height: 610px;
  background-image: url("/images/image.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  text-align: center;
`;
const ContentWrapper = styled.div`
  width: 40%;
  padding-left: 3rem;

  & h2 {
    color: #fff;
    font-weight: 200;
    padding-top: 0px;
    font-size: 30px;
    margin-top: 10px;
  }

  & p {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 300;
  }
`;

const LeadText = styled.p`
  font-weight: 200;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  text-align: text;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const HireMeButton = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #bac964;
  border-color: #bac964;
  border-style: solid;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.2rem;
  padding: 1rem 1.5rem;
  margin-left: 5px;
`;

const CVButton = styled.a`
  background-color: #6c757d;
  border-color: #6c757d;
  cursor: pointer;
  color: #fff;
  border-style: solid;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.2rem;
  padding: 0.85rem 1.5rem;
  margin-left: 5px;
  text-decoration: none;
`;

export default About;
