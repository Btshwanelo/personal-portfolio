import React from 'react';
import styled from 'styled-components';
import { useNav } from '../hooks/useNav';

const HeroSection = () => {
  const homeRef = useNav('Home');
  return (
    <Container ref={homeRef} id="homeContainer">
      <Wrapper>
        <Heading>
          Hello, I&apos;m
          <strong>Tshwanelo Goodwill Bucibo</strong>
        </Heading>
        <Text>and this is My Resume</Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 700px;
  background-image: url("/images/image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  margin-top: 70px;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  color: #fff;
  font-weight: 200;
  font-size: 70px;
  display: grid;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const Text = styled.strong`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  animation: bounce-in-top 1.5s 1s both;
`;

export default HeroSection;
