import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import "./navbar.css"

function NavBar() {
  return (
    <header className="header">
      <Container>
        <Scrollspy
          items={["home", "about", "skill", "portfolio", "contact"]}
          currentClassName="is-current"
        >
          <Navbar fixed="top" bg="dark" variant="dark" style={{display:"flex", justifyContent:"center"}}>
            <Nav className="navigation">
              <Nav.Link className="nav__link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav__link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav__link" href="#skill">
                Skill
              </Nav.Link>
              <Nav.Link className="nav__link" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="nav__link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar>
        </Scrollspy>
      </Container>
    </header>
  );
}

export default NavBar;
