import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './Appoint.css';
import pat from './image/patreg.jpg';

function Appoint() {
  return (
    <Form className="newpat">
      <h2 className="mb-4 text-center" id="text">User Information Form</h2>

      <section>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" aria-label="Name" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formAge">
              <Form.Label>Age:</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" aria-label="Age" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formGender">
              <Form.Label>Gender:</Form.Label>
              <Form.Control as="select" aria-label="Gender">
                <option value="">Select your gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" aria-label="Phone Number" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" aria-label="Email" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address:</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" aria-label="Address" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <div className="image-container">
              <img className="img-fluid rounded" alt="Patient Registration" src={pat} />
            </div>
          </Col>
        </Row>
      </section>

      <Button type="submit" className="sub-btn mt-3">
        Submit
      </Button>

      <div className="text-center mt-3">
        <a href="Newuser" className="text-decoration-none">
          Book Appointment
        </a>
      </div>
    </Form>
  );
}

export default Appoint;
