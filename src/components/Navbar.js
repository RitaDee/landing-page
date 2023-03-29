import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GirlImg from '../Images/Girl.png';
import mobile from '../Images/mobilehero.png';
import user from '../Images/user.png';
import preview from '../Images/previews.png';
import mark from '../Images/mark.png';
function CustomNavbar() {
  return (
    <header id="header">
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" style={{ color: '#fff' }} className="logo">Tech Time</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#deets" style={{ color: '#fff' }}>Home</Nav.Link>
              <Nav.Link href="#deets" style={{ color: '#fff' }}>About Us</Nav.Link>
              <Nav.Link href="#deets" style={{ color: '#fff' }}>Courses</Nav.Link>
              <Nav.Link href="#deets" style={{ color: '#fff' }}>Testimonials</Nav.Link>
              <Nav.Link href="#deets" style={{ color: '#fff' }}>Community</Nav.Link>
              <Nav.Link href="#deets" style={{ background: '#FFF', color: '#004DB3', padding: '16px 32px' }}>Enroll Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="align-items-md-center">
          <Col xs={12} md="6">
            <h1 className="banner-heading">Grow your skills to advance your career path</h1>
            <p className="banner-caption">
              Build your future with our quality education.
              We are the best and largest all-in-one online tutoring platform in the world.
            </p>
            <div className="banner-actions">
              <Button>
                Get started now
              </Button>
              <Button>
                Enroll now
              </Button>
            </div>
            <Row className="justify-content-between mt-3 flex-center">
              <Col>
                <img alt="user" src={user} />
                <img alt="preview" src={preview} />
              </Col>
              <Col className="ml-auto mark-image">
                <img alt="mark" src={mark} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md="6">
            <img alt="girl" src={GirlImg} className="desktop-hero" />
            <img alt="girl" src={mobile} className="mobile-hero" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default CustomNavbar;
