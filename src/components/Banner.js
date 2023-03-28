import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GirlImg from '../Images/Girl.png';
import user from '../Images/user.png';
import preview from '../Images/previews.png';
import mark from '../Images/mark.png';
import '../styles/Banner.css';

const Banner = () => (
  <div className="bg-primary">
    <Container>
      <Row className="px-md-5 mt-3">
        {' '}
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

      <Row className="justify-content-between mt-3">
        <Col>
          <img alt="user" src={user} />
        </Col>
        <Col>
          <img alt="preview" src={preview} />
        </Col>
        <Col className="ml-auto">
          <img alt="mark" src={mark} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Banner;
