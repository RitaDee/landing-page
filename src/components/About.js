import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Container, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Audio from '../Images/volume_up.png';
import antenna from '../Images/antenna.png';
import autoplay from '../Images/autoplay.png';
import description from '../Images/description.png';
import Tech from '../Images/tech.png';
import Techg from '../Images/techgirl.png';
import User from '../Images/user.png';
import Unsplash from '../Images/unsplash.png';
import Education from '../Images/education.png';
import Schedule from '../Images/schedule.png';
import Group from '../Images/groups.png';
import Atm from '../Images/atm.png';
import Research from '../Images/research.png';
import Audience from '../Images/audience.png';
import Code from '../Images/code.png';
import Js from '../Images/js.png';
import Room from '../Images/outroom.png';
import Live from '../Images/live.png';
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
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Img variant="primary" src={Education} alt="Image" />
              <Card.Title>Experienced Mentors</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There’s No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Img variant="primary" src={Schedule} alt="Image" />
              <Card.Title>One-On-One Meetings</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There’s No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Img src={Group} alt="Image" />
              <Card.Title>One-On-One Meetings</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There’s No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Img src={Atm} alt="Image" />
              <Card.Title>Affordable Prices</Card.Title>
              <Card.Text>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There’s No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <div>
      <h1>Browse Our Popular Courses</h1>
      <Nav className="justify-content-center flex-grow-1 pe-3">
        <Nav.Link href="#action1">All Categories </Nav.Link>
        <Nav.Link href="#action2">Design</Nav.Link>
        <Nav.Link href="#action2">Development</Nav.Link>
        <Nav.Link href="#action2">marketing</Nav.Link>
      </Nav>
      <Card>
        <Card.Img variant="top" src={Research} />
        <Card.Body>
          <Card.Text>
            Design
            <span className="text-muted">Likes: 10</span>
          </Card.Text>
          <Card.Title>Introduction to user research in UX Design</Card.Title>
          <Card.Text>
            23hrs 50mins | 15 Lessons
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Audience} />
        <Card.Body>
          <Card.Text>
            marketing
            <span className="text-muted">Likes: 20</span>
          </Card.Text>
          <Card.Title>Introduction to  new marketing audience </Card.Title>
          <Card.Text>
            22hrs 30mins | 22 Lessons
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Code} />
        <Card.Body>
          <Card.Text>
            development
            <span className="text-muted">Likes: 30</span>
          </Card.Text>
          <Card.Title>Introduction to HTML, CSS & Bootstrap</Card.Title>
          <Card.Text>
            45hrs 50mins | 55 lessons
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Js} />
        <Card.Body>
          Development
          <Card.Text>
            <span className="text-muted">Likes: 40</span>
          </Card.Text>
          <Card.Title>Introduction to javascript, Git & GitHub</Card.Title>
          <Card.Text>
            30hrs 50mins | 22 lessons
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Room} />
        <Card.Body>
          <Card.Text>
            Marketing
            <span className="text-muted">Likes: 50</span>
          </Card.Text>
          <Card.Title>Introduction to outroom  marketing analysis</Card.Title>
          <Card.Text>
            33hrs 50mins | 26 Lessons
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Live} />
        <Card.Body>
          <Card.Text>
            Marketing
            <span className="text-muted">Likes: 60</span>
          </Card.Text>
          <Card.Title>Introduction to live  marketing analysis</Card.Title>
          <Card.Text>
            10hrs 50mins | 32 lessons
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" size="sm">
        Explore All Courses
      </Button>
    </div>
  </div>
);

export default About;
