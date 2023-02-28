import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/target.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NavbarComp = () => {
    return ( 
        <div>
          <Container className='d-flex align-items-center justify-content-between'>
            <Navbar bg="white" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <Nav.Link href="#home">Source</Nav.Link>
                    <Nav.Link href="#link">Administration</Nav.Link>
                    <Nav.Link href="#home">Kindle</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                    <NavDropdown title="Vendors" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Camp Endem</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Rose Dam</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Somfora</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Lester Boss
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Investors</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>

              {/* logo */}
            <img alt='logo' src={logo} className="logo" />

            <div>
            <Form className='d-flex align-items-center gap-2'>
                <Form.Group className="" controlId="formBasicText">
                  <Form.Control type="text" placeholder="Enter search" />
                </Form.Group>
                <Button variant="light" type="submit" className='border p-2'>Submit</Button>
          </Form>
            </div>
          </Container>
        </div>
     );
}
 
export default NavbarComp;