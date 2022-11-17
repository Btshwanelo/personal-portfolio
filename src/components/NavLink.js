import React, { useContext } from "react";
import { NavContext } from "../hooks/NavContext";
import styled from "styled-components";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return activeNavLinkId !== navLinkId ? (
    <ListItem>
      <Link id={navLinkId} onClick={handleClick}>
        {navLinkId}
      </Link>
    </ListItem>
  ) : (
    <ListItem>
      <ActiveLink id={navLinkId} onClick={handleClick}>
        {navLinkId}
      </ActiveLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  padding: 15px 20px;
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #bac964;
  }
`;

const ActiveLink = styled(Link)`
  color: #bac964;
`;

export default NavLink;
