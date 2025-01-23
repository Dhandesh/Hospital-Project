import React from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <Container fluid className="text-center text-md-left py-4">
        <Row className="text-center text-md-left">
          {/* ELITE CARE Section */}
          <Col xs={12} md={6} lg={3} className="mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">ELITE CARE</h5>
            <p>Your trusted healthcare provider offering top-notch services.</p>
          </Col>

          {/* Links Section */}
          <Col xs={6} md={3} lg={2} className="mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/about" className="text-white">About</Nav.Link>
              <Nav.Link href="/doctor" className="text-white">Doctors</Nav.Link>
              <Nav.Link href="/departments" className="text-white">Departments</Nav.Link>
            </Nav>
          </Col>

          {/* Quick Links Section */}
          <Col xs={6} md={3} lg={2} className="mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/Contact1" className="text-white">Hospital Contact</Nav.Link>
              <Nav.Link href="/Doc" className="text-white">Doctors Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={6} lg={3} className="mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">CONTACT</h5>
            <Nav className="flex-column">
              <Nav.Link href="https://maps.google.com" className="text-white">
                <i className="fa-solid fa-warehouse"></i> 17C, Peelamedu, Coimbatore.
              </Nav.Link>
              <Nav.Link href="tel:+919952149911" className="text-white">
                <i className="fa-solid fa-phone"></i> +91-9952149911
              </Nav.Link>
              <Nav.Link href="mailto:contact@elitecare.com" className="text-white">
                <i className="fa-solid fa-envelope"></i> contact@elitecare.com
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="mb-4" />

        <Row>
          <Col xs={12} md={7} lg={4} className="text-md-left">
            <p>&copy; {year} Elite Care. All rights reserved.</p>
          </Col>
          <Col className="text-md-right">
            <Button
              variant="success"
              href="https://wa.me/1234567890" // Replace with your WhatsApp link
              className="m-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </Button>
            <Button
              variant="primary"
              href="mailto:contact@elitecare.com"
              className="m-2"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Mail
            </Button>
            <Button
              variant="info"
              href="https://facebook.com/yourprofile" // Replace with your Facebook link
              className="m-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </Button>
            <Button
              variant="danger"
              href="https://instagram.com/yourprofile" // Replace with your Instagram link
              className="m-2"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
