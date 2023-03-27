import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GirlImg from '../Images/Girl.png';

const Banner = () => (
  <Container>
    <Row className="px-md-5">
      <Col md={6}>
        <h2>Grow your skills to advance your career path</h2>
        <p>
          Build your future with our quality education.
          We are the best and largest all-in-one online tutoring platform in the world.
        </p>
        <Button variant="secondary" size="sm" className="mr-2">
          Get started now
        </Button>
        <Button variant="primary" size="sm">
          Enroll now
        </Button>
      </Col>
      <Col md={6} className="text-center">
        <img alt="girl" src={GirlImg} />
      </Col>
    </Row>
  </Container>
);

export default Banner;
