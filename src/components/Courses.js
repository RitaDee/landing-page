3:38
/* eslint-disable*/
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Research from '../Images/research.png';
import Audience from '../Images/audience.png';
import Code from '../Images/code.png';
import Js from '../Images/js.png';
import Room from '../Images/outroom.png';
import Live from '../Images/live.png';
import frame from '../Images/frame.png'
import schedule from '../Images/schedule.png'
import book from '../Images/menu_book.png'
import Jef from '../Images/card/jef.png'
import Cla from '../Images/card/cla.png'
import Jes from '../Images/card/jes.png'
import Sam from '../Images/card/sam.png'
import Adam from '../Images/card/adam.png'
import Leo from '../Images/card/leo.png';
function Courses() {
  return (
    <Container id="courses">
      <Row className="justify-content-md-center">
        <h2>Browse Our Popular Courses</h2>
        <Nav className="justify-content-center flex-grow-1 pe-3 courses-tab">
          <Nav.Link href="#action1">All Categories </Nav.Link>
          <Nav.Link href="#action2">Design</Nav.Link>
          <Nav.Link href="#action2">Development</Nav.Link>
          <Nav.Link href="#action2">marketing</Nav.Link>
        </Nav>
        <Col md={4} xs={6}>
          <Card>
            <Card.Img variant="top" src={Research} />
            <Card.Body>
            <Badge pill>
              Design
            </Badge>
            <img src={frame} alt="likes" className="card-likes"/>
              <Card.Title>Introduction to user research in UX Design</Card.Title>
              <Card.Text>
                <span><img src={schedule} alt="" />23hrs 50mins </span>
                <span><img src={book} alt="" />15 Lessons</span>
              </Card.Text>
              <div className="author">
                <span><img src={Leo} alt="Adam" />leonard victor</span>
                <span>$25.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card>
            <Card.Img variant="top" src={Audience} />
            <Card.Body>
              <Badge pill>
                Marketing
              </Badge>
              <img src={frame} alt="likes" className="card-likes"/>
              <Card.Title>Introduction to  new marketing audience </Card.Title>
              <Card.Text>
                <span><img src={schedule} alt="" />23hrs 30mins </span>
                <span><img src={book} alt="" />22 Lessons</span>
              </Card.Text>
              <div className="author">
                <span><img src={Jef} alt="Adam" />Jeffrey williams</span>
                <span>$32.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card>
            <Card.Img variant="top" src={Code} />
            <Card.Body>
              <Badge pill>
                Development
              </Badge>
              <img src={frame} alt="likes" className="card-likes"/>
              <Card.Title>Introduction to HTML, CSS & Bootstrap</Card.Title>
              <Card.Text>
                <span><img src={schedule} alt="" />45hrs 50mins </span>
                <span><img src={book} alt="" />55 Lessons</span>
              </Card.Text>
              <div className="author">
                <span><img src={Cla} alt="Adam" />claretta mason</span>
                <span>$55.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card>
            <Card.Img variant="top" src={Js} />
            <Card.Body>
              <Badge pill>
                Development
              </Badge>
              <img src={frame} alt="likes" className="card-likes"/>
              <Card.Title>Introduction to javascript, Git & GitHub</Card.Title>
              <Card.Text>
                <span><img src={schedule} alt="" />30hrs 50mins</span>
                <span><img src={book} alt="" />22 Lessons</span>
              </Card.Text>
              <div className="author">
                <span><img src={Jes} alt="Adam" />Jessica duke</span>
                <span>$45.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card>
            <Card.Img variant="top" src={Room} />
            <Card.Body>
            <Badge pill>
                Marketing
              </Badge>
              <img src={frame} alt="likes" className="card-likes"/>
              <Card.Title>Introduction to outroom  marketing analysis</Card.Title>
              <Card.Text>
                <span><img src={schedule} alt="" />33hrs 50mins</span>
                <span><img src={book} alt="" />26 Lessons</span>
              </Card.Text>
              <div className="author">
                <span><img src={Sam} alt="Adam" />Samuel jacobs</span>
                <span>$25.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card>
            <Card.Img variant="top" src={Live} />
            <Card.Body>
            <Badge pill>
                Marketing
              </Badge>
              <img src={frame} alt="likes" className="card-likes"/>
              <Card.Title>Introduction to live  marketing analysis</Card.Title>
              <Card.Text>
                <span><img src={schedule} alt="" />10hrs 50mins</span>
                <span><img src={book} alt="" />32 Lessons</span>
              </Card.Text>
              <div className="author">
                <span><img src={Adam} alt="Adam" />Adam Smith</span>
                <span>$25.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Button className="explore-btn">
          Explore All Courses
        </Button>
      </Row>
    </Container>
  );
}

export default Courses;
