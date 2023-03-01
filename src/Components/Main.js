import {Alert, Row, Col, Button, Card, Container, Badge} from 'react-bootstrap';
import sidePic from '../Assets/martin-baron-RBmlPdZ13nE-unsplash.jpg';
import { BoxArrowInRight } from 'react-bootstrap-icons';

//   main component
function Main() {
    return (
        <main>
            <Container className='mt-5 pt-5'>
            {/* side bar col 1 */}
            <Row>
                <Col xs={12} md={4} className='mb-5 mb-lg-0'>
                <aside>
                    {/* alert component */}
                    <div>
                        <Alert variant="success">
                            <Alert.Heading className='fs-5'>West Side Consulting</Alert.Heading>
                        </Alert>
                    </div>

                    {/* card with images */}
                    <div>
                        <Card>
                            <Card.Img variant="top" src={sidePic} />
                            <Card.Body>
                                <Card.Title>Evidently Proven <BoxArrowInRight className='flo'/></Card.Title>
                                <Card.Subtitle className='color-text-sub py-2'>Tech Spar with Vibes</Card.Subtitle>
                                <Card.Text>
                                    The best in the field of tech because we guarantue adequate provision to all your requirements.
                                    We listen to problems and we provide solutions.
                                </Card.Text>
                                <Button variant="" className='color-btn'>Join Today!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </aside>
                </Col>

                 {/* main col 2*/}
                <Col xs={12} md={8}>
                <main>
                    {/* header with badge */}
                    <div className='d-flex align-items-center'>
                        <h3 className='color-text'>How to benefit from Technology</h3>
                            <Badge bg='secondary' className='ms-4'>plus<sup className='color-text-sub'>+</sup></Badge>
                    </div>
                    {/* p tag */}
                    <div>
                        <p className='text-success'>We are glad you took the decision. Thanks</p>
                    </div>
                        {/* text content */}
                    <div>
                        <p>
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                        </p>

                        <p>
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                        </p>

                        <p>
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry
                            SOmething so something but ypu know we can alwasy give you the best so you dont have to worry

                        </p>
                    </div>
                </main>
                </Col>
            </Row>
            </Container>
        </main>
    );
}
export default Main;