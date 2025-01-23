import React from 'react'
import Table from "react-bootstrap/Table";
import { Row, Col } from 'react-bootstrap';

const Doc = () => {
  const doctors = [    
    { id: 1, name: "Dr.Sai Chandran", department: "Director", contact: "0422-4324642" },
    { id: 2, name: "Dr.Jeeva", department: "Cardiologists", contact: "0422-4324114" },
    { id: 3, name: "Dr.Vasanth", department: "Neurologists", contact: "0422-4323396" },
    { id: 4, name: "Dr.Prithish", department: "Pediatricians", contact: "0422-4324641" },
    { id: 5, name: "Dr.Sujith", department: "Dermatologists", contact: "0422-4323614" },
    { id: 6, name: "Dr.Ramya", department: "Gynecologists", contact: "0422-4323370" },
    { id: 7, name: "Dr.Pallavi", department: "Gynecologists", contact: "0422-4323148" },
    { id: 8, name: "Dr.Pooja", department: "Radiologists", contact: "0422-4323113" },
    { id: 9, name: "Dr.Ramesh", department: "ENT", contact: "0422-4323216" },
    { id: 10, name: "Dr.Manohar", department: "Anesthesiology", contact: "0422-4323617" },
    { id: 11, name: "Dr.Lakshmi", department: "Anesthesiology", contact: "0422-4323173" },
    { id: 12, name: "Dr.Vinodini", department: "Dental", contact: "0422-4324107" },
    { id: 13, name: "Dr.Sethna", department: "Pulmonology", contact: "0422-4323623" },
    { id: 14, name: "Dr.Dhandesh", department: "Cardiologists", contact: "0422-4323624" },
    { id: 15, name: "Dr.Gowtham", department: "ENT", contact: "0422-4323221" },
    { id: 16, name: "Dr.Susila", department: "Radiologists", contact: "0422-4324018" },
    { id: 17, name: "Dr.Jayalakshmi", department: "Ophthalmologists", contact: "0422-4323389" },
    { id: 18, name: "Dr.Gokul", department: "Psychiatrists", contact: "0422-4323651" },
  ];

  return (
    <div>
      <Row><Col className='sm-6'>
      <h2 className='d-block ' id='text'><center>Doctors Contact Numbers</center></h2>
    <div className="container mt-4">
         
      <Table  id='ta'className="table-hover table-striped table-rows" bordered>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>DOCTORS</th>
            <th>DEPARTMENTS</th>
            <th>CONTACT NUMBERS</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.department}</td>
              <td>{doctor.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Col></Row></div>
  );
};

export default Doc;
