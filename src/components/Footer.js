import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import icon1 from '../Images/icons/g12.png'
import icon2 from '../Images/icons/Twitter.png'
import icon3 from '../Images/icons/YouTube.png'
import icon4 from '../Images/icons/inst.png'
import icon5 from '../Images/icons/Discord.png'
function Footer() {
  return (
    <Container fluid id="footer">
      <Row>
        <Col md={3}>
          <h3 className="logo">Tech Time</h3>
          <p>reach out to us on any of our social media networks</p>
          <div className="social-icons">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
          </div>  
        </Col>
        <Col md={3}>
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Courses</li>
            <li>Testimonials</li>
            <li>Our Community</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4>Community</h4>
          <ul>
            <li>Help Centres</li>
            <li>Partners</li>
            <li>Suggestion</li>
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4>subscribe us</h4>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="nft123@gmail.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Send Message
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}
export default Footer;
