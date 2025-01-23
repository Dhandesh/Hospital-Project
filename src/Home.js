import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import hos1 from './image/Hospital 1.jpg';
import hos2 from './image/Hospital 2.jpg';
import hos3 from './image/Hospital 3.jpg';
import hos4 from './image/Hospital 4.jpg';
import hos5 from './image/Hospital 5.jpg';
import abc from './image/Hospital logo.png';

function Home() {
  return (
    <div>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center" id="text">Welcome To Elite Care</h2>
            <p>
              Elite Care provides total health care to its patients, with the highest levels of skill, professionalism,
              and ethical practice, leading to their effective care and treatment at affordable costs. Elite Care facilitates
              medical education and research and is committed to continuous quality improvement.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="bg-dark d-flex justify-content-center align-items-center" style={{ width: '100%', height: '300px' }}>
          {/* Left Section */}
          <Col className="text-white d-flex flex-column justify-content-center">
            <h3 className="pt-5 ps-5">Book Appointment</h3>
            <h3 className="ps-5">With 100+ Trusted Doctors</h3>
            <a className="text-white ps-5" href="/Login"><b>Book Appointment</b></a>
          </Col>
          
          {/* Right Section */}
          <Col>
            <img style={{ width: '100%', height: '300px' }} alt="Appointment" src={abc} />
          </Col>
        </Row>
      </Container>

      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={hos1} alt="Slide 1" style={{ height: '450px' }} />
            <Carousel.Caption>
              <p className="text-light">Your Health, Our Priority</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={hos2} alt="Slide 2" style={{ height: '450px' }} />
            <Carousel.Caption>
              <p className="text-light">Emergency - 24*7</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={hos3} alt="Slide 3" style={{ height: '450px' }} />
            <Carousel.Caption>
              <p className="text-light">Feel like your home</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={hos4} alt="Slide 4" style={{ height: '450px' }} />
            <Carousel.Caption>
              <p className="text-light">Multispeciality Laboratory</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={hos5} alt="Slide 5" style={{ height: '450px' }} />
            <Carousel.Caption>
              <p className="text-light">1000+ operations</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Row className="my-4">
        <Col sm={12}>
          <p className='aabb'>
            Elite Care is the best multispecialty hospital in Tamil Nadu. With over 100+ doctors with expertise across the healthcare sector, 
            Elite Care has existed for over 10 years as the leading multi-specialty hospital in Tamil Nadu. With over 35 specialties, 
            Elite Care is located in Coimbatore and has been holding its position as the best hospital in Tamil Nadu since its inception.

            We offer a wide range of health check-ups, including women's health, senior citizens' health, and specific health check-ups such as diabetes, blood pressure, and others.

            Supported by renowned Japanese healthcare systems, Elite Care is the first hospital to bring both Indian and Japanese healthcare technologies under one roof. With a 350-bed capacity, our hospital boasts state-of-the-art facilities and medical technologies that meet high standards as per medical requirements.

            We strive for excellence at Elite Care, and our aim to provide comprehensive medical care has been successful across various medical services, especially in cardiac sciences, neurosciences, bone and joint care, hepatobiliary sciences, renal sciences, and women and child care.

            Our multidisciplinary team approach includes centres of excellence in Neurosciences, Cardiac Sciences, Orthopaedics, Obstetrics and Gynaecology, Digestive and Renal Sciences, Rehabilitation Sciences, Pediatrics, Pediatric Superspeciality, and Aesthetic Surgery.

            At Elite Care, we provide round-the-clock emergency services, including ambulances, first responder bikes for crucial medical support, and a panel of expert specialist doctors and staff trained to handle critical cases with the utmost care. 

            Elite Care also offers international patient services with access to accommodation facilities, including semi-private rooms, private rooms, and deluxe suites, with amenities like 2-bedded & 3-bedded spacious rooms and 24-hour nurses on duty.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
