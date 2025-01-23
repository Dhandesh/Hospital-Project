import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation logic here for email and password
    if (email && password) {
      navigate("/Newuser");  // Redirect to the Newuser page on successful login
    } else {
      alert("Please enter both email and password");
    }
  }

  return (
    <div className="img">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="login-container">
              <h2 className="text-center">Login</h2>
              <p className="text-center">Please log in to book an appointment</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Button type="submit" className="w-100 login-button" variant="primary">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <a href="Appoint" className="text-decoration-none">
                  Create a New Account
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
