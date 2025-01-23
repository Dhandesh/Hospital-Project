import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import abc from './image/Hospital logo.png';

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <h3>Our Vision</h3>
            <p><b>1. Excellence in Patient Care:</b> Strive to provide world-class healthcare services with a focus on patient-centered care.</p>
            <p><b>2. Innovation and Technology:</b> Embrace cutting-edge medical technologies and innovations for superior treatment.</p>
            <p><b>3. Community Impact:</b> Improve the health and well-being of the community by offering accessible and affordable healthcare.</p>
            <p><b>4. Global Leadership:</b> Aspire to be recognized as a leading healthcare institution both nationally and internationally.</p>
            <p><b>5. Sustainability and Growth:</b> Commit to sustainable practices while expanding to meet the evolving needs of patients.</p>

            <h3>Our Mission</h3>
            <p><b>1. Compassionate Care:</b> Deliver healthcare services with empathy, dignity, and respect for every patient.</p>
            <p><b>2. Quality and Safety:</b> Ensure high standards of medical care with a commitment to patient safety and continuous improvement.</p>
            <p><b>3. Education and Research:</b> Foster medical education and groundbreaking research to advance healthcare knowledge.</p>
            <p><b>4. Collaboration:</b> Work collaboratively with healthcare professionals, patients, and the community to provide integrated care.</p>
            <p><b>5. Accessibility:</b> Ensure healthcare is accessible to all, regardless of socio-economic background, without compromising quality.</p>
          </Col>
          
          <Col md={4}>
            <Image src={abc} alt="Hospital Logo" fluid />
          </Col>
        </Row>
        </Container>

        <div className="text-xl my-4">
          <center><h3>Why Choose Us</h3></center>
        </div>

        <Row className="d-flex flex-column flex-md-row mb-20">
          <Col md={4} className='border'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </Col>
          <Col md={4} className='border'>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </Col>
          <Col md={4} className='border'>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </Col>
        </Row>      
    </div>
  );
}

export default About;
