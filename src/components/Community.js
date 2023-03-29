import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Comm from '../Images/community.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Community.css';
const Community = () => (
  <>
    <Container fluid id="community">
      <Row className="justify-content-md-center">
        <Col md={10} className="community-header">
          <span style={{color:"#fff"}}>JOIN OUR COMMUNITY</span>
          <h2 style={{color:"#fff"}}>Are you  ready to connect with the future talent of the tech world</h2>
          <p style={{color:"#fff"}}>Meet Up With Other Techstars And Grow Together</p>
          {/* <img alt="img" src={Comm} /> */}
          <Button>Join Our Community</Button>
        </Col>
      </Row>
    </Container>
  </>
);

export default Community;
