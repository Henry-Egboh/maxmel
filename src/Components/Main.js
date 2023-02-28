import { useState } from 'react';
import {Alert, Row, Col, Button, Card, Container} from 'react-bootstrap';
import sidePic from '../Assets/martin-baron-RBmlPdZ13nE-unsplash.jpg';
import { BoxArrowInRight } from 'react-bootstrap-icons';


// function to display Alert component
function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading className='fs-5'>West Side Consulting</Alert.Heading>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)} className='btn-secondary'>Show Alert</Button>;
  }

//   main component
function Main() {
    return (
        <div>
            <Container>
            {/* side bar col 1 */}
            <Row>
                <Col xs={12} md={4}>
                <aside>
                    {/* alert component */}
                    <div>
                        <AlertDismissibleExample />
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
                    
                </main>
                </Col>
            </Row>
            </Container>
        </div>
    );
}
export default Main;