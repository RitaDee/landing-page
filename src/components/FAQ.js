import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import add from '../Images/icons/add.png';
import remove from '../Images/icons/remove.png';

function FAQ() {
  return (
    <Container id="faq">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <p style={{ textAlign: 'center' }}>
            High-Defination Video is Video of Higher Resolution And
            Quality Than Standard Definition.
            While There’s No Standard Meaning For High Definition,
            Generally Any Standard Video Image
          </p>
        </Col>
        <Col md={8}>
          <ListGroup variant="flush" className="faq-container">
            <ListGroup.Item>
              <div className="flex">
                <h4>Is there a free trial available?</h4>
                <img src={remove} className="remove" alt="img" />
              </div>
              <p>
                High-Defination Video is Video of Higher Resolution And
                Quality Than Standard Definition.
                While There’s No Standard Meaning For High Definition,
                Generally Any Standard Video Image
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex">
                <h4>Is there a free trial available?</h4>
                <img src={add} alt="img" />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex">
                <h4>are the courses lifetime?</h4>
                <img src={add} alt="img" />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex">
                <h4>do i get certified after taking courses?</h4>
                <img src={add} alt="img" />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex">
                <h4>how do i reach out to mentors?</h4>
                <img src={add} alt="img" />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex">
                <h4>do we get job ready after taking courses?</h4>
                <img src={add} alt="img" />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
