import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown, Button, Form } from 'react-bootstrap';
import {ChevronBarRight} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return ( 
        <div>
          <Container className='d-flex align-items-center justify-content-between'>
            <Navbar bg="white" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link href="#home">Source</Nav.Link>
                    <Nav.Link href="#link">Administration</Nav.Link>
                    <Nav.Link href="#home">Kindle</Nav.Link>
                    <Nav.Link href="/Components/Register.js">Register</Nav.Link>
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
            <Link to="/" className='text-decoration-none'>
            <div className='d-flex align-items-center'>
                <ChevronBarRight className='fs-2 text-dark'/>
                <h4 className='color-text'>Max<span className='color-text-sub'>mel</span></h4>
            </div>
            </Link>
              {/* search box */}
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