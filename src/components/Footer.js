import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LinkedInIcon, TwitterIcon, GithubIcon } from "../assets/Icons";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Text>
        Copyright © {year} All rights reserved | Tshwanelo
        Goodwill Bucibo
      </Text>
      <Icons>
        <a
          href="https://www.linkedin.com/in/tshwanelo-bucibo-b9193ab8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/BTshwanelo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/Btshwanelo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </Icons>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Text = styled.p`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.7;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
`;
const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: #333;
    position: relative;
    border-radius: 50%;
    font-size: 22px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export default Footer;
