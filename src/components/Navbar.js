import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <li>techtime</li>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">about us</Nav.Link>
        <Nav.Link href="#courses">courses</Nav.Link>
        <Nav.Link href="#testimonial">testimonial</Nav.Link>
        <Nav.Link href="#community">community</Nav.Link>
        <Nav.Link href="#enroll">enroll now</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default CustomNavbar;
