import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sh from "./image/share.jpg";
import abc from './image/Hospital logo.png';

const Contact1 = () => {
  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="text-center my-4">
        <Col>
          <h2 className="py-2" id='text'><b>Contact Us</b></h2>
        </Col>
      </Row>

      {/* Image Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Image src={sh} id="recep" alt="Share" style={{ height: "100%", width: "109%" }} fluid />
        </Col>

        {/* Form Section */}
        <Col md={6} id="form">
          <h1 className="text-danger"><b>Share with us</b></h1>
          <h5 className="text-light">
            <i>Send questions, complaints, suggestions, and more via the form below.</i>
          </h5>
          <hr/>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-light"><b>Name </b><sup>*</sup></Form.Label>
              <Form.Control type="text" required style={{ opacity: 0.9 }} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light"><b>Email</b> <sup>*</sup></Form.Label>
              <Form.Control type="email" required style={{ opacity: 0.8 }} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light"><b>Mobile No</b> <sup>*</sup></Form.Label>
              <Form.Control type="text" required style={{ opacity: 0.8 }} />
            </Form.Group>


<Form.Group className="mb-3">
        {/* New Patient Radio Button */}
        <Form.Check
          type="radio"
          id="new-patient"
          label="New Patient"
          name="patientType"
          className="text-warning"
        />
        
        {/* Review Patient Radio Button with white text */}
        <Form.Check
          type="radio"
          id="review-patient"
          label="Review Patient"
          name="patientType"
          className="text-white" // Bootstrap class for white text
        />
      </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light"><b>Message </b><sup>*</sup></Form.Label>
              <Form.Control as="textarea" rows={3} required style={{ opacity: 0.8 }} />
            </Form.Group>

            <Button variant="outline-danger" type="submit"><b>SEND A MESSAGE</b></Button>

          </Form>
        </Col>
      </Row>

      {/* Branches Section */}
      <Row>
        <Col md={6} className="bg-dark text-white p-4">
          <h1 className="text-bg-danger">OUR BRANCHES</h1>
          <h6 className="text-info"><b>ELITE CARE CENTER</b></h6>
          <address><i>No.15,  Vivekananda Road,  Ram Nagar,<br />
          Coimbatore-641009, India.</i></address>
          <p>Phone: +91 422 4378720</p>
          <h5>Feedback to mail: <a href="mailto:feedback@elitecare.ac.in" className="text-decoration- text-blue">feedback@elitecare.ac.in</a></h5>
          <hr />
          <h6 className="text-info">ELITE CARE CITY CENTER</h6>
          <p>87 C Sathy Road, Kovilpalayam,<br />Coimbatore – 641107, India.</p>
          <p>Phone: +91 424 – 2256456</p>
          <h5>Feedback to mail: <a href="mailto:feedback@elitecare.ac.in" className="text-decoration- text-blue">feedback @elitecare.ac.in</a></h5>
          <Image src={abc} style={{ width: '100%', height: '400px' }} alt="Hospital Logo" fluid />
        </Col>

        {/* Contact Details Section */}
        <Col md={6} className="bg-dark text-white p-4">
          <h1 className="text-secondary">Hospital Address:</h1>
          <p> 17C<i> Peelamedu, Coimbatore - 641 004<br />Tamil Nadu, INDIA.</i></p>
          <hr />
          <h5 className="text-danger">Enquiry:</h5>
          <a href="mailto:contact@elitecare.com" className="text-decoration- text-blue">contact@elitecare.com</a>
          <hr />
          <h5 className="text-danger">Emergency:</h5>
          <p>+91-7449108108</p>
          <hr />
          <h5 className="text-danger">Help Line:</h5>
          <p>+91-9952149911</p>
          <hr />
          <h5 className="text-danger">Phone:</h5>
          <p>
            0422 - 434 5353,<br />
            0422 - 458 7999,<br />
            0422 - 491 8599,<br />
            0422 - 257 0170
          </p>
          <hr />
          <h5 className="text-danger">For Feedback:</h5>
          <a href="mailto:feedback@elitecare.ac.in" className="text-decoration- text-blue">feedback@elitecare.ac.in</a>
          <hr />
          <h5 className="text-danger">WhatsApp:</h5>
          <a href="tel:9952149911" className="text-decoration- text-blue">9952149911</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact1;
