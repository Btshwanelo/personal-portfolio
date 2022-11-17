import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiCalendar } from "react-icons/fi";
import { useNav } from "../hooks/useNav";
import { experience } from "../assets/experience";
import { education } from "../assets/education";

const Resume = (props) => {
  const resumeRef = useNav("Resume");
  return (
    <Container ref={resumeRef} id="resumeContainer">
      <Heading>
        <h2>
          My <strong>Resume</strong>
        </h2>
      </Heading>
      <Content>
        <EducationWrapper>
          <h2>Education</h2>
          {education.map((education) => (
            <Card key={education.id}>
              <CardDate>
                <span>
                  <FiCalendar />
                </span>
                {education.date}
              </CardDate>
              <CardTitle>{education.title}</CardTitle>
              <p>{education.description}</p>
              <span>{education.institution}</span>
            </Card>
          ))}
        </EducationWrapper>
        <ExperienceWrapper>
          <h2>Experince</h2>
          {experience.map((experience) => (
            <Card key={experience.id}>
              <CardDate>
                <span>
                  <FiCalendar />
                </span>
                {experience.date}
              </CardDate>
              <CardTitle>{experience.title}</CardTitle>
              <p>{experience.description}</p>
              <span>{experience.institution}</span>
            </Card>
          ))}
        </ExperienceWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;

  & h2 {
    font-weight: 200;
    padding-top: 20px;
    font-size: 30px;

    & strong {
      font-weight: 800;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  grid-template-areas: ". .";
`;

const EducationWrapper = styled.div`
  max-width: 100%;

  & h2 {
    color: #fff;
    font-weight: 200;
    font-size: 25px;
    margin-bottom: 3rem;
  }
`;

const ExperienceWrapper = styled.div`
  max-width: 100%;

  & h2 {
    color: #fff;
    font-weight: 200;
    font-size: 25px;
    margin-bottom: 3rem;
  }
`;

const Card = styled.div`
  padding: 30px;
  background: #333;
  transition: 0.3s all ease;
  border: 4px solid transparent;
  border-radius: 7px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 300;
  margin-bottom: 1.5rem !important;
`;

const CardDate = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;

  & span {
    margin-right: 3px;
  }
`;

const CardTitle = styled.h3`
  color: #bac964;
  font-size: 20px;
  font-weight: 200;
`;

export default Resume;
