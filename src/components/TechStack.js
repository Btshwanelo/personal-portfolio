import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { techstack } from "../assets/techStack";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TechStack = (props) => {
  return (
    <Container>
      <Heading>
        Tech <strong>Stack</strong>{" "}
      </Heading>
      <Content>
        {techstack.map((stack) => (
          <Pill key={stack.id}>
            <LazyLoadImage src={stack.img} width="40" height="40" />
            {stack.stack}
          </Pill>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Heading = styled.h2`
  color: #fff;
  font-weight: 200;
  padding-top: 20px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;

  & strong {
    font-weight: 800;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Pill = styled.button`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  border-style: solid;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.2rem;
  padding: 0.5rem 1.5rem;
  margin: 10px 15px 10px 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default TechStack;
