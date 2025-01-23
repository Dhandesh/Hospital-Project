import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact1 from './Contact1';
import Doctor from './Doctor';
import History from './History';
import Departments from './Departments';
import Login from './Login';
import Appoint from './Appoint';
import Newuser from './Newuser';
import Doc from './Doc';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact1" element={<Contact1/>} />
            <Route path="/doctor" element={<Doctor/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/departments" element={<Departments/>} />
             <Route path="/login" element={<Login/>} /> 
            <Route path="/appoint" element={<Appoint/>} />
            <Route path="/newuser" element={<Newuser/>} /> 
            <Route path="/doc" element={<Doc/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;