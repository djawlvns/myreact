import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { NavLink, Link } from "react-router-dom";

export function Navbar() {
  const Container = styled.div`
    width: 247px;
    height: 100vh;
    background-color: #eee;
    font-size: 1.5rem;
    padding: 50px 10px;
  `;
  const Li = styled.li`
    list-style: none;
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;
  return (
    <>
      <Container>
        <ul>
          <Li>
            <StyledLink to={"/"}>Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/contact"}>Contact</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/about"}>About</StyledLink>
          </Li>
        </ul>
      </Container>
    </>
  );
}
