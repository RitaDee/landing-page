import React from 'react';
import {
  Card, Row, Col, Button,
} from 'react-bootstrap/Card';
import '../styles/About.css';

const About = () => (
  <div>
    <Row className="px-md-5 mt-3">
      {' '}
      <Col md={6}>
        <h2>High quality video, audio & live classes</h2>
        <p>
          High-Defination Video is Video of Higher Resolution And Quality Than Standard Definition.
          While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
        <Button variant="secondary" size="sm" className="mr-2">
          View Courses
        </Button>
        <Button variant="primary" size="sm">
          Enroll now
        </Button>
      </Col>
      <Col md={6} className="text-center">
        <img alt="girl" src={GirlImg} />
      </Col>
    </Row>

  </div>
);

export default About;
