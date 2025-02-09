import React from 'react';
import wx from './image/Doctor 12.jpg';
import cm from './image/Chairman.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';

const History = () => {
  return (
    <div>
      <Row>
        <Col className='sm-6'>
      <h3>Our History</h3>
      <p className='aabb'>Elite Care Super Specialty Hospital, started functioning as a 50 bedded multi speciality hospital from the 1st 
        of May 2010 in the heart of Coimbatore city. Within the first of year of operations, the services of our hospital
        was recognized by our patients and very soon came to be the preferred hospital to many in western Tamil Nadu for
        emergency, primary, and specialty care in virtually all the branches of modern medicine.</p>
        </Col>  </Row>
      <Container className="m-4 d-flex justify-content-center align-items-center">
        <Row>
          <Col className="d-flex justify-content-center">
            <Card className="mb-3 " id='effect' style={{ width: '18rem' }}>
              <Card.Img variant="top" alt='' src={cm} />
              <Card.Body>
                <Card.Text className="text-center bg-light p-1">
                  <h2>Dr. Dhakshina</h2><br />Founder & Chairman
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col className="d-flex justify-content-center">
            <Card className="mb-3" id='effect' style={{ width: '18rem' }}>
              <Card.Img variant="top" alt='' src={wx} />
              <Card.Body>
                <Card.Text className="text-center bg-light p-1">
                  <h2>Dr. Sai Chandran</h2><br />Director
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <h3>Awards & Recognitions</h3>
      <ul>
        <li>Elite Care also boasts for having been awarded <span className='text-info'><b> The Green Hospital award</b></span> by the Association of Healthcare Providers of India.</li>
        <li>Elite Care is the <span className='text-info'><b> 3rd teaching hospital in the country and 1st in state of Tamil Nādu</b></span> to be certified by the National Accreditation Board of Hospitals – NABH.</li>
        <li>The laboratory services at the Elite Care are also accredited by the <span className='text-info'><b> National Accreditation Board for testing and Calibration Laboratories (NABL).</b></span></li>
        <li>Elite Care Institute of Medical Sciences and Research is also an <span className='text-info'><b>  ISO 9001:2008 TUV Rheinland certified institute</b></span> since 2008.</li>
        <li>Elite Care Institutional ethics committee is accredited by the <span className='text-info'><b> WHO SIDCER</b></span> (Strategic Initiative for Developing Capacity in Ethical Review Forum).</li>
        <li>Elite Care receives the <span className='text-info'><b> "Award of Appreciation" for the Best Performance in Heart Transplantation 2024.</b></span></li>
        <li>Elite Care is the<span className='text-info'><b>  1st Teaching Hospital in Tamil Nadu to get the NABH Accreditation in Digital Health.</b></span></li>
        <li>Elite Care<span className='text-info'> <b> receives the NABH Accreditation in Nursing Excellence.</b></span></li>
      </ul>
    </div>
  );
}

export default History;
