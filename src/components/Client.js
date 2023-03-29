import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import zoom from '../Images/Vector.png';
import stripe from '../Images/Group.png';
import slack from '../Images/slack.png';
import monday from '../Images/monday.png';
import dropbox from '../Images/Dropbox.png';

const Client = () => (
  <Container fluid className="client-container">
    <Row className="align-items-md-center justify-content-center">
      <Col md={2} xs={2}><img alt="client" src={zoom} /></Col>
      <Col md={2} xs={2}><img alt="client" src={stripe} /></Col>
      <Col md={2} xs={2}><img alt="client" src={slack} /></Col>
      <Col md={2} xs={2}><img alt="client" src={monday} /></Col>
      <Col md={2} xs={2}><img alt="client" src={dropbox} /></Col>
    </Row>
  </Container>
);

export default Client;
