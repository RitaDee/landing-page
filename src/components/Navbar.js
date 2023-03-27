import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="light" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Tech Time</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="offcanvasNavbar">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>
              <Nav.Link href="#action2">Courses</Nav.Link>
              <Nav.Link href="#action2">Testimonial</Nav.Link>
              <Nav.Link href="#action2">Community</Nav.Link>
              <Nav.Link href="#action2">Enroll Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
