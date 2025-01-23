import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Newuser.css';

const Newuser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [email, setEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [patientType, setPatientType] = useState('');

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  const departments = [
    { id: 'ANES', name: 'Anesthesiology' },
    { id: 'CAR', name: 'Cardiology' },
    { id: 'DER', name: 'Dermatology' },
    { id: 'ENT', name: 'ENT' },
    { id: 'GYN', name: 'Gynaecology' },
    { id: 'NEU', name: 'Neurology' },
    { id: 'OPH', name: 'Ophthalmology' },
    { id: 'DEN', name: 'Dental' },
    { id: 'PED', name: 'Pediatrics' },
    { id: 'PSY', name: 'Psychiatry' },
    { id: 'PUL', name: 'Pulmonology' },
    { id: 'RAD', name: 'Radiology' },
  ];

  const doctors = {
    ANES: ['Dr.Manohar', 'Dr.Lakshmi'],
    CAR: ['Dr.Jeeva', 'Dr.Dhandesh'],
    DER: ['Dr.Sujith'],
    ENT: ['Dr.Ramesh', 'Dr.Gowtham'],
    GYN: ['Dr.Ramya', 'Dr.Pallavi'],
    NEU: ['Dr.Vasanth'],
    OPH: ['Dr.Jayalakshmi'],
    DEN: ['Dr.Vinodini'],
    PED: ['Dr.Prithish'],
    PSY: ['Dr.Gokul'],
    PUL: ['Dr.Sethna'],
    RAD: ['Dr.Pooja', 'Dr.Susila'],
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setDoctor('');
  };

  const handleDoctorChange = (e) => {
    setDoctor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !phoneNumber || !department || !doctor || !email || !appointmentDate || !patientType) {
      alert('Please fill out all fields.');
    } else {
      console.log({
        name,
        age,
        phoneNumber,
        department,
        doctor,
        email,
        appointmentDate,
        patientType,
      });
      // Reset form after submission (if needed)
      window.location.reload();
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <center><h2 id='text'>Book an Appointment</h2></center>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => {
                const number = e.target.value;
                const phoneRegex = /^\d{0,10}$/; // Allows up to 10 digits
                if (phoneRegex.test(number)) {
                  setPhoneNumber(number);
                } else {
                  alert("Phone number must contain only digits and up to 10 digits.");
                }
              }}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" name="gender" required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="appointmentDate">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Select value={department} onChange={handleDepartmentChange} required>
              <option value="">Select Department</option>
              {departments.map((dep) => (
                <option key={dep.id} value={dep.id}>
                  {dep.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="doctor">
            <Form.Label>Doctor</Form.Label>
            <Form.Select
              value={doctor}
              onChange={handleDoctorChange}
              required
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {department &&
                doctors[department]?.map((doc, index) => (
                  <option key={index} value={doc}>
                    {doc}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Label>Patient Type</Form.Label>
      <div>
        <Form.Check
          type="radio"
          label="New Patient"
          value="new"
          checked={patientType === 'new'}
          onChange={handlePatientTypeChange}
        />
        <Form.Check
          type="radio"
          label="Review Patient"
          value="review"
          checked={patientType === 'review'}
          onChange={handlePatientTypeChange}
        />
      </div>

      <Button type="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
  );
};

export default Newuser;
