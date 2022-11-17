import React from "react";
import styled from "styled-components";
import { navLinks } from "../assets/navLinks";
import NavLink from "./NavLink";

const Navbar = (props) => {
  return (
    <Container>
      <List>
        {navLinks.map((nav) => (
          <NavLink key={nav.id} navLinkId={nav.navLinkId} scrollToId={nav.scrollToId} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 0;
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0px;
  margin: 0;
`;

export default Navbar;
