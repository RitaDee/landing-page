/*eslint-disable*/
import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Audio from '../Images/icons/audio.png';
import live from '../Images/icons/live.png';
import notes from '../Images/icons/notes.png';
import record from '../Images/icons/record.png';
import Tech from '../Images/tech.png';
import Techg from '../Images/techgirl.png';
import meeting from '../Images/icons/meeting.png';
import meetings from '../Images/icons/meetings.png';
import mentors from '../Images/icons/mentors.png';
import price from '../Images/icons/price.png';
import Unsplash from '../Images/unsplash.png';
import '../styles/About.css';
const About = () => (
  <Container id="about">
    <Row className="align-items-md-center">
      <Col md={6}>
        <h2>High quality video, audio & live classes</h2>
        <p>
          High-Defination Video is Video of Higher Resolution And Quality Than Standard Definition.
          While There's No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
        <Button className="view-btn">
          View Courses
        </Button>
        <div className="about-actions">
          <div>
            <Button variant="secondary" size="sm" className="mr-2">
              <span>
                <img alt="antenna" src={Audio} />
              </span>
              Audio Classes
            </Button>
            <Button variant="primary" size="sm">
              <span>
                <img alt="volume" src={live} />
              </span>
              Live Classes
            </Button>
          </div>
          <div>
            <Button variant="secondary" size="sm" className="mr-2">
              <span>
                <img alt="autoplay" src={record} />
              </span>
              Recorded Classes
            </Button>
            <Button variant="primary" size="sm">
              <span>
                <img alt="volume" src={notes} />
              </span>
              50+ Notes
            </Button>
          </div>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <div className="about-image">
          <img src={Tech}/>
          <div className="image-float">
            <img src={Techg}/>
          </div>
        </div>
      </Col>
    </Row>
    <Row className="align-items-md-center niche-padding">
      <Col md={5}>
        <h2>This is why we are best from others</h2>
        <p>
          High-Defination Video is Video of Higher Resolution And Quality Than Standard Definition.
          While There's No Standard Meaning For High Definition, Generally Any Standard Video Image
        </p>
        <img src={Unsplash} alt="image" className="image-fluid"/>
      </Col>
      <Col xs={12} md={{ span: 6, offset: 1 }}>
      <Row className="about-row-container">
        <Col md={6} xs={6}>
          <Card className='about-card'>
            <Card.Body>
              <img src={mentors} alt="Card Image"/>
              <Card.Title className="about-card-title">Experienced Mentors</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There's No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xs={6}>
          <Card className='about-card'>
            <Card.Body>
              <img src={meetings} alt="Card Image"/>
              <Card.Title className="about-card-title">One-On-One Meetings</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There's No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xs={6}>
          <Card className='about-card'>
            <Card.Body>
            <img src={meeting} alt="Card Image"/>
              <Card.Title className="about-card-title">One-On-One Meetings</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There's No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xs={6}>
          <Card className='about-card'>
            <Card.Body>
              <img src={price} alt="Card Image"/>
              <Card.Title className="about-card-title">Affordable Prices</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There's No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
    </Row>
  </Container>
);

export default About;
