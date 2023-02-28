import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { ChevronBarRight,Facebook,Whatsapp,Linkedin,Twitter,Youtube } from 'react-bootstrap-icons';

const Footer = () => {
    return ( 
        <footer className='bg-dark text-light'>
          <Container >
            {/* company logo with text at footer */}
                <div className='w-25 pt-5'>
                    <div className='d-flex align-items-center'>
                        <ChevronBarRight className='fs-2'/>
                        <h4 className='color-text'>Max<span className='color-text-sub'>mel</span></h4>
                    </div>
                    <div>
                        <p className='font-monospace monospace-color'>The technology of the now, see it in knowing.
                        Re-cycle can make what we do efficient and modern if you care</p>
                    </div>
                </div>
                <Row>
                  {/* first col */}
                    <Col xs={6} md={4} lg={3} className="py-5 footer-text">
                      <Nav defaultActiveKey="/home" className="flex-column">
                          <Nav.Link className='text-light ps-0' eventKey="link-1">Cash via ATM</Nav.Link>
                          <Nav.Link className='text-light ps-0' href="/home">Solitude Pay</Nav.Link>
                          <Nav.Link className='text-light ps-0' eventKey="link-2">Free DOM Delivery</Nav.Link>
                          <Nav.Link className='text-light ps-0' eventKey="link-1">Ash Botller</Nav.Link>
                          <Nav.Link className='text-light ps-0' eventKey="link-2">Face Off Fact</Nav.Link>
                          <Nav.Link className='text-light ps-0' eventKey="link-1">Dancing Queen</Nav.Link>
                          <Nav.Link className='text-light ps-0' eventKey="link-2">Welcome Versace</Nav.Link>
                      </Nav>
                    </Col>

                      {/* second col */}
                    <Col xs={6} md={4} lg={3} className="py-5 footer-text">
                      <Nav defaultActiveKey="/home" className="flex-column">
                          <Nav.Link className='text-light' eventKey="link-1">Cash via ATM</Nav.Link>
                          <Nav.Link className='text-light' href="/home">Solitude Pay</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Free DOM Delivery</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-1">Ash Botller</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Face Off Fact</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-1">Dancing Queen</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Welcome Versace</Nav.Link>
                      </Nav>
                    </Col>

                    {/* third col */}
                    <Col xs={6} md={4} lg={3} className="py-5 footer-text">
                      <Nav defaultActiveKey="/home" className="flex-column">
                          <Nav.Link className='text-light' eventKey="link-1">Cash via ATM</Nav.Link>
                          <Nav.Link className='text-light' href="/home">Solitude Pay</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Free DOM Delivery</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-1">Ash Botller</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Face Off Fact</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-1">Dancing Queen</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Welcome Versace</Nav.Link>
                      </Nav>
                    </Col>

                    {/* fourth col */}
                    <Col xs={6} md={4} lg={3} className="py-5 footer-text">
                      <Nav defaultActiveKey="/home" className="flex-column">
                          <Nav.Link className='text-light' eventKey="link-1">Cash via ATM</Nav.Link>
                          <Nav.Link className='text-light' href="/home">Solitude Pay</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Free DOM Delivery</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-1">Ash Botller</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Face Off Fact</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-1">Dancing Queen</Nav.Link>
                          <Nav.Link className='text-light' eventKey="link-2">Welcome Versace</Nav.Link>
                      </Nav>
                    </Col>
                </Row>

                     {/*base footer  */}
                     <Row className='footer-text align-items-center my-5 pt-3 pb-5'>
                      {/* social icons */}
                      <Col xs={12} md={4}>
                          <p>Follow us:</p>
                          <div className='d-flex gap-4'>
                                <Link to='/' className='text-light'><Linkedin /></Link>
                                <Link to='/' className='text-light'><Whatsapp /></Link>
                                <Link to='/' className='text-light'><Facebook /></Link>
                                <Link to='/' className='text-light'><Twitter /></Link>
                                <Link to='/' className='text-light'><Youtube /></Link>
                          </div>
                      </Col>

                      {/* privacy statement */}
                      <Col xs={6} md={4} className='d-flex gap-4'>
                      <Link to='/' className='text-light text-decoration-none'><p>Cookies Policy</p></Link>
                      <Link to='/' className='text-light text-decoration-none'><p>Privacy Statement</p></Link>
                      </Col>

                      {/* empty col */}
                      <Col xs={6} md={4}></Col>
                     </Row>
          </Container>
        </footer>
     );
}
 
export default Footer;