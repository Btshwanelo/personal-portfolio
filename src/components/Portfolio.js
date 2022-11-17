import React, { useState } from "react";
import styled from "styled-components";
import { useNav } from "../hooks/useNav";
import { projects } from "../assets/projects";

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState("All");

  const portfolioRef = useNav("Portfolio");

  const handlePortfolio = (portfolio) => {
    setActivePortfolio(portfolio);
  };

  return (
    <Container ref={portfolioRef} id="portfolioContainer">
      <Heading>
        Featured <strong>Portfolio</strong>
      </Heading>
      <Filters>
        <List>
          <ListItem>
            {activePortfolio != "All" ? (
              <Link onClick={() => handlePortfolio("All")}>All</Link>
            ) : (
              <LinkActive onClick={() => handlePortfolio("All")}>
                All
              </LinkActive>
            )}
          </ListItem>
          <ListItem>
            {activePortfolio != "React Js" ? (
              <Link onClick={() => handlePortfolio("React Js")}>React Js</Link>
            ) : (
              <LinkActive onClick={() => handlePortfolio("React Js")}>
                React Js
              </LinkActive>
            )}
          </ListItem>
          <ListItem>
            {activePortfolio != "PWA" ? (
              <Link onClick={() => handlePortfolio("PWA")}>
                PWA
              </Link>
            ) : (
              <LinkActive onClick={() => handlePortfolio("PWA")}>
                Full stack
              </LinkActive>
            )}
          </ListItem>
        </List>
      </Filters>
      <Content>
        <Wrapper>
          {activePortfolio === "All" &&
            projects.map((project) => (
              <Card key={project.id}>
                <CardImage>
                  <img src={project.img} width="100%" height="100%" />
                </CardImage>
                <CardDetails>
                  <h4>{project.name}</h4>
                  <p>{project.category}</p>
                  {project.github && (
                    <GithubLink href={project.github} target="_blank">
                      View on Github
                    </GithubLink>
                  )}
                  {project.live && (
                    <LiveLink href={project.live} target="_blank">
                      View Live
                    </LiveLink>
                  )}
                </CardDetails>
              </Card>
            ))}
          {projects.map(
            (project) =>
              project.category === activePortfolio && (
                <Card key={project.id}>
                  <CardImage>
                    <img src={project.img} width="100%" height="100%" />
                  </CardImage>
                  <CardDetails>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                    {project.github && (
                      <GithubLink href={project.github} target="_blank">
                        View on Github
                      </GithubLink>
                    )}
                    {project.live && (
                      <LiveLink href={project.live} target="_blank">
                        View Live
                      </LiveLink>
                    )}
                  </CardDetails>
                </Card>
              )
          )}
        </Wrapper>
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

const Filters = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0px;
  padding: 0;
  margin: 0 0 30px 0;
`;

const ListItem = styled.li`
  color: #fff;
  padding: 15px 20px;
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #bac964;
  }
`;

const LinkActive = styled(Link)`
  color: #bac964;
`;

const Content = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  grid-template-areas: ". . .";
`;

const Card = styled.div`
  animation: scale-in-center 0.5s cubic-bezier(0.19, 1, 0.22, 1) both;
`;

const CardImage = styled.div``;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 200;
    margin: 5px;
    text-transform: capitalize;
  }

  & p {
    font-size: 12px;
    text-transform: uppercase;
    color: #cccccc;
    text-decoration: uppercase;
    line-height: 1.7;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;

const GithubLink = styled(Link)`
  color: #bac964;
  text-transform: capitalize;
  margin: 5px;
  &:hover {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const LiveLink = styled(GithubLink)``;
export default Portfolio;
