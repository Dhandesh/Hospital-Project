import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';

import ab from './image/Doctor 1.jpg';
import cd from './image/Doctor 2.jpg';
import ef from './image/Doctor 3.jpg';
import gh from './image/Doctor 4.jpg';
import ij from './image/Doctor 5.jpg';
import kl from './image/Doctor 6.jpg';
import mn from './image/Doctor 7.jpg';
import op from './image/Doctor 8.jpg';
import qr from './image/Doctor 9.jpg';
import st from './image/Doctor 10.jpg';
import uv from './image/Doctor 11.jpg';
import wx from './image/Doctor 12.jpg';
import yz from './image/Doctor 13.jpg';
import ac from './image/Doctor 14.jpg';
import ad from './image/Doctor 15.jpg';
import ae from './image/Doctor 16.jpg';
import af from './image/Doctor 17.jpg';
import ag from './image/Doctor 18.jpg';

function Doctors() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/Newuser');
  };
  
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleShow = (doctor) => {
    setModalData(doctor);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const doctors = [
    {
      name: 'Dr. Sai Chandran',
      image: wx,
      title: 'Director',
      details: {
        subtitle: 'Director, Elite Care Hospital',
        specialty: 'General Surgeon',
        experience: '20 Years',
        qualification: 'IN ORTHODONTIA',
        designation: 'Associate Professor/Consultant',
      },
    },
    {
      name: 'Dr. Jeeva',
      image: cd,
      title: 'Cardiologists',
      details: {
        subtitle: 'Department of Cardiology, Elite Care Hospital',
        specialty: 'Cardiologist',
        experience: '18 Years',
        qualification: 'MD.,DNB (Cardiology)',
        designation: 'Senior Consultant',
      },
    },
    {
      name: 'Dr. Vasanth',
      image: ef,
      title: 'Neurologists',
      details: {
        subtitle: 'Department of Neurology, Elite Care Hospital',
        specialty: 'Neurology',
        experience: '3 Years',
        qualification: 'MD,DM',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Prithish',
      image: kl,
      title: 'Pediatricians',
      details: {
        subtitle: 'Department of Paediatrics, Elite Care Hospital',
        specialty: 'Paediatrics',
        experience: '25 Years',
        qualification: 'MD (Paed)., DC',
        designation: 'Senior Consultant',
      },
    },
    {
      name: 'Dr. Sujith',
      image: st,
      title: 'Dermatologists',
      details: {
        subtitle: 'Department of Dermatology, Elite Care Hospital',
        specialty: 'Dermatology',
        experience: '7 Years',
        qualification: 'MD (DVL)',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Ramya',
      image: op,
      title: 'Gynecologists',
      details: {
        subtitle: 'Department of Gynecology, Elite Care Hospital',
        specialty: 'Gynecologic oncology',
        experience: '5 Years',
        qualification: 'MS(Obst&Gyn), MCH (Gyn- Oncology)',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Pallavi',
      image: mn,
      title: 'Gynecologists',
      details: {
        subtitle: 'Department of Gynecology, Elite Care Hospital',
        specialty: 'Gynecologic Oncology',
        experience: '3 Years',
        qualification: 'MS (Obst & Gyn)',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Pooja',
      image: uv,
      title: 'Radiologists',
      details: {
        subtitle: 'Department of Radiology, Elite Care Hospital',
        specialty: 'Radiology',
        experience: '8 Years',
        qualification: 'MD, DNB, FNVIR',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Ramesh',
      image: ab,
      title: 'ENT',
      details: {
        subtitle: 'Department of ENT Surgery, Elite Care Hospital',
        specialty: 'ENT Surgery',
        experience: '11 Years',
        qualification: 'DNB (ENT), DLO',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Manohar',
      image: ac,
      title: 'Anesthesiology',
      details: {
        subtitle: 'Department of Anaesthesiology, Elite Care Hospital',
        specialty: 'Anaesthesiology',
        experience: '4 Years',
        qualification: 'MD, DNB',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Lakshmi',
      image: ad,
      title: 'Anesthesiology',
      details: {
        subtitle: 'Department of Anaesthesiology, Elite Care Hospital',
        specialty: 'Anaesthesiology',
        experience: '6 Years',
        qualification: 'MD, DNB',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Vinodini',
      image: ae,
      title: 'Dental',
      details: {
        subtitle: 'Department of Dental Surgery, Elite Care Hospital',
        specialty: 'Dental Surgery',
        experience: '6 Years',
        qualification: 'MDS',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Sethna',
      image: af,
      title: 'Pulmonology',
      details: {
        subtitle: 'Department of Pulmonology, Elite Care Hospital',
        specialty: 'Pulmonology',
        experience: '6 Years',
        qualification: 'MD, DNB',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Dhandesh',
      image: ag,
      title: 'Cardiologists',
      details: {
        subtitle: 'Department of Cardiology & Preventive Cardiology, Elite Care Hospital',
        specialty: 'Cardiology & Preventive Cardiology',
        experience: '9 Years',
        qualification: 'MD, DM (Card)',
        designation: 'Senior Consultant',
      },
    },
    {
      name: 'Dr. Gowtham',
      image: yz,
      title: 'ENT',
      details: {
        subtitle: 'Department of ENT Surgery, Elite Care Hospital',
        specialty: 'ENT Surgery',
        experience: '4 Years',
        qualification: 'MBBS, MS (ENT), DNB (ENT)',
        designation: 'Senior Consultant',
      },
    },
    {
      name: 'Dr. Susila',
      image: qr,
      title: 'Radiologists',
      details: {
        subtitle: 'Department of Radiology, Elite Care Hospital',
        specialty: 'Radiology',
        experience: '4 Years',
        qualification: 'MD, DNB, FNVIR',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Jayalakshmi',
      image: ij,
      title: 'Ophthalmologists',
      details: {
        subtitle: 'Department of Ophthalmology, Elite Care Hospital',
        specialty: 'Ophthalmology',
        experience: '2 Years',
        qualification: 'MS, DNB',
        designation: 'Consultant',
      },
    },
    {
      name: 'Dr. Gokul',
      image: gh,
      title: 'Psychiatrists',
      details: {
        subtitle: 'Department of Psychiatry, Elite Care Hospital',
        specialty: 'Psychiatry',
        experience: '17 Years',
        qualification: 'DPM, MD (Psych)',
        designation: 'Senior Consultant',
      },
    },
  ];
  

  return (
    <div>
      <h2 className="text-center" id='text'>Top Doctors</h2>

      <Container className="my-4">
        <Row>
          {doctors.map((doctor, index) => (
            <Col key={index} md={4} className="d-flex justify-content-center">
              <Card className="mb-3" id='effect' style={{ width: '18rem' }} onClick={() => handleShow(doctor)}>
                <Card.Img variant="top" src={doctor.image} alt={doctor.name} />
                <Card.Body>
                  <Card.Text className="text-center bg-light p-1">
                    <h2>{doctor.name}</h2>
                    <br />
                    {doctor.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData.details && (
            <div>
              <p className="profile-subtitle">{modalData.details.subtitle}</p>
              <div className="underline"></div>
              <p className="profile-detail">
                <span>Specialty:</span> {modalData.details.specialty}
              </p>
              <p className="profile-detail">
                <span>Experience:</span> {modalData.details.experience}
              </p>
              <p className="profile-detail">
                <span>Qualification:</span> {modalData.details.qualification}
              </p>
              <p className="profile-detail">
                <span>Designation:</span> {modalData.details.designation}
              </p>
              <Button variant="primary" onClick={handleNavigate}>Book Appointment</Button> 
              <Button variant="primary" className="ms-2">Call Now</Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Doctors;
