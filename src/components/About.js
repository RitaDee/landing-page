import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Audio from '../Images/volume_up.png';
import antenna from '../Images/antenna.png';
import autoplay from '../Images/autoplay.png';
import description from '../Images/description.png';
import Tech from '../Images/tech.png';
import Techg from '../Images/techgirl.png';
import User from '../Images/user.png';
import Unsplash from '../Images/unsplash.png';
import '../styles/About.css';

const About = () => (
  <div className="about-container">
    <Row className="px-md-5 mt-3">
      <Col md={6}>
        <h2>High quality video, audio & live classes</h2>
        <p>
          High-Defination Video is Video of Higher Resolution And Quality Than Standard Definition.
          While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
        <Button variant="secondary" size="sm" className="mr-2">
          View Courses
        </Button>
      </Col>
      <Col md={6} className="text-center">
        <Card>
          <Card.Img variant="top" src={Tech} alt="Image" className="img-fluid mb-2" />
          <Card.Img variant="top" src={User} alt="Image" className="img-fluid mt-2 mb-2" />
          <Card.Img variant="top" src={Techg} alt="Image" className="img-fluid mt-2" />
        </Card>
      </Col>
      <Row>
        <Col md={6}>
          <Button variant="secondary" size="sm" className="mr-2">
            <span>
              <img alt="autoplay" src={description} />
            </span>
            Recorded Classes
          </Button>
          <Button variant="primary" size="sm">
            <span>
              <img alt="volume" src={autoplay} />
            </span>
            50+ Notes
          </Button>
        </Col>
        <Col md={6}>
          <Button variant="secondary" size="sm" className="mr-2">
            <span>
              <img alt="antenna" src={Audio} />
            </span>
            Audio Classes
          </Button>
          <Button variant="primary" size="sm">
            <span>
              <img alt="volume" src={antenna} />
            </span>
            Live Classes
          </Button>
        </Col>
      </Row>
    </Row>
    <div>
      <h1>This is why we are best from others</h1>
      <p>
        High-Defination Video is Video of Higher Resolution And Quality Than Standard Definition.
        While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image
      </p>
      <Card.Img variant="top" src={Unsplash} alt="Image" />
    </div>
  </div>
);

export default About;
