import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import abc from './image/Hospital logo.png';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <img 
            src={abc} 
            height={65} 
            width={65} 
            alt="Hospital Logo" 
            className="d-inline-block align-top" 
          />
          <Navbar.Brand>ELITE CARE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              
              <NavDropdown title="About Us" id="about-us-dropdown">
                <NavDropdown.Item as={Link} to="/History">Our History</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/About">Vision & Mission</NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link as={Link} to="/Doctor">Doctors</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/Departments">Departments</Nav.Link>
              </Nav.Item>

              <NavDropdown title="Consultants" id="consultants-dropdown">
                <NavDropdown.Item as={Link} to="/Doc">Doctors Contact Numbers</NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link as={Link} to="/Contact1">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link 
                  as={Link} 
                  to="/Login" 
                  className="text-decoration-none text-info"
                >
                  Sign In
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
