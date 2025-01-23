import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import ab from './image/anesneww.PNG';
import ne from './image/cardionewwww.PNG';
import phy from './image/dermanewww.PNG';
import op from './image/entnewww.PNG';
import pe from './image/gynecnewww.PNG';
import der from './image/neruuunewww.PNG';
import gyn from './image/opthalnewww.PNG';
import ra from './image/dental1.webp';
import ent from './image/pedia.PNG';
import den from './image/Psychiatry.jpg';
import pul from './image/pulmonology.jpg';
import ane from './image/radioneww.PNG';

// Department data
const departmentData = [
  {
    img: ab,
    alt: 'Anesthesiology Department',
    description:
      'Anesthesiology focuses on pain management and the administration of anesthesia during surgeries and procedures. It ensures patient comfort and safety throughout the perioperative period.',
  },
  {
    img: ne,
    alt: 'Cardiology Department',
    description:
      'The Cardiology Department specializes in the diagnosis and treatment of heart and vascular conditions. It includes non-invasive and invasive procedures to manage cardiovascular diseases.',
  },
  {
    img: phy,
    alt: 'Dermatology Department',
    description:
      'Dermatology focuses on the diagnosis and treatment of skin, hair, and nail conditions. It provides medical, surgical, and cosmetic treatments for a wide range of dermatological issues.',
  },
  {
    img: op,
    alt: 'ENT Department',
    description:
      'ENT (Otorhinolaryngology) focuses on the diagnosis and treatment of ear, nose, and throat conditions. It includes medical and surgical care for related structures of the head and neck.',
  },
  {
    img: pe,
    alt: 'Obstetrics and Gynecology Department',
    description:
      'Obstetrics and Gynecology (OB/GYN) focuses on women’s reproductive health, pregnancy, and childbirth. It provides comprehensive care from preventive services to surgical interventions.',
  },
  {
    img: der,
    alt: 'Neurology Department',
    description:
      'The Neurology department deals with disorders of the brain, spinal cord, and nervous system. It offers both diagnostic and therapeutic services for a variety of neurological conditions.',
  },
  {
    img: gyn,
    alt: 'Ophthalmology Department',
    description:
      'Ophthalmology focuses on the diagnosis and treatment of eye conditions and vision disorders. It includes medical and surgical interventions to preserve and improve vision.',
  },
  {
    img: ra,
    alt: 'Dental Medicine Department',
    description:
      'Dental medicine and oral medicine is focused on the teeth, gums, and mouth. It includes the study, diagnosis, prevention, and treatment of conditions of the mouth.',
  },
  {
    img: ent,
    alt: 'Pediatrics Department',
    description:
      'Pediatrics focuses on the health and medical care of infants, children, and adolescents. It encompasses preventive care, diagnosis, and treatment of acute and chronic illnesses.',
  },
  {
    img: den,
    alt: 'Psychiatry Department',
    description:
      'Psychiatry deals with the diagnosis, treatment, and prevention of mental health disorders. It encompasses a range of therapies, including medication management, counseling, and psychotherapy.',
  },
  {
    img: pul,
    alt: 'Pulmonology Department',
    description:
      'Pulmonology specializes in the diagnosis and treatment of lung and respiratory tract disorders. It provides both medical and surgical care for a range of pulmonary conditions.',
  },
  {
    img: ane,
    alt: 'Radiology Department',
    description:
      'Radiology provides imaging services to diagnose and treat various medical conditions. It uses advanced technology like X-rays, MRI, CT scans, and ultrasound to visualize internal body structures.',
  },
];

const Departments = () => {
  return (
    <section>
      <center>
        <h2 className="dept mb-4" id='text'>Our Departments</h2>
      </center>
      <Container>
        <Row className="g-4">
          {departmentData.map((dept, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100" id="effect">
                <Card.Img variant="top" src={dept.img} alt={dept.alt} />
                <Card.Body>
                  <Card.Text className="text-center bg-light p-2">{dept.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Departments;
