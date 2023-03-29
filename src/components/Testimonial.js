import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bella from '../Images/card/bella.png'
import samuel from '../Images/card/samuel.png'
import bryce from '../Images/card/bryce.png'
function Testimonial() {
  return (
    <Container id="testimonial">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>what our clients are saying</h2>
          <p style={{textAlign:"center"}}>
            high-defination video is video of higher resolution
            and quality than standard definition. while there's 
            no standard meaning for high definition, generally any standard video image
          </p>
        </Col>
      </Row>
      <Row className="test-sec">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
              </Card.Text>
              <div className="card_footer">
                <div className="footer_image">
                  <img src={bella} alt="bella"/>
                </div>
                <div>
                  <span className="name">Bella Moon</span>
                  <span className="title">Product Designer</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
              </Card.Text>
              <div className="card_footer">
                <div className="footer_image">
                  <img src={samuel} alt="bella"/>
                </div>
                <div>
                  <span className="name">samuel fortune</span>
                  <span className="title">Product Designer</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
              </Card.Text>
              <div className="card_footer">
                <div className="footer_image">
                  <img src={bryce} alt="bella"/>
                </div>
                <div>
                  <span className="name">bryce jason</span>
                  <span className="title">Product Designer</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
              </Card.Text>
              <div className="card_footer">
                <div className="footer_image">
                  <img src={bryce} alt="bella"/>
                </div>
                <div>
                  <span className="name">bryce jason</span>
                  <span className="title">Product Designer</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
              </Card.Text>
              <div className="card_footer">
                <div className="footer_image">
                  <img src={bryce} alt="bella"/>
                </div>
                <div>
                  <span className="name">bryce jason</span>
                  <span className="title">Product Designer</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
}
export default Testimonial;
