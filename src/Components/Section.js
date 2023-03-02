import { Row, Col, Container } from 'react-bootstrap';
import { CircleSquare, Dice2, SlashCircle } from 'react-bootstrap-icons';

const Section = () => {
    return ( 
            <section>
                <Container className='py-5 my-xs-2 my-sm-5'>
                    <Row className=''>
                        <Col xs={12} sm={6} lg={4} className='mb-3 mb-lg-0'>
                        <div className='d-flex align-items-center'>
                            <CircleSquare className='fs-3 me-3 color-text-sub'/>
                            <h4 className='color-text'>Frameworks</h4>
                        </div>
                        <p>The tech of the now is what we get when we begin to investigate our internet to better improve the lives ansd properties of a generation.</p>
                        <p>In the beginning as a learner it will be difficulft but you need to flow with the process in order to remain focused.</p>
                        <p>How fast you want to go depends on your commitment, dedication and persistent in a world where things happens so fast. Let me remind you of
                            how fast you need to go even in coding.
                        </p>
                        </Col>

                        <Col xs={12} sm={6} lg={4} className='mb-3 mb-lg-0'>
                        <div className='d-flex align-items-center'>
                            <SlashCircle className='fs-3 me-3 text-danger'/>
                            <h4 className='color-text'>Javascript</h4>
                        </div>
                        <p>The tech of the now is what we get when we begin to investigate our internet to better improve the lives ansd properties of a generation.</p>
                        <p>In the beginning as a learner it will be difficulft but you need to flow with the process in order to remain focused.</p>
                        <p>How fast you want to go depends on your commitment, dedication and persistent in a world where things happens so fast. Let me remind you of
                            how fast you need to go even in coding.
                        </p>
                        </Col>

                        <Col xs={12} sm={6} lg={4}>
                        <div className='d-flex align-items-center'>
                            <Dice2 className='fs-3 me-3 text-dark'/>
                            <h4 className='color-text'>Server Courses</h4>
                        </div>
                        <p>The tech of the now is what we get when we begin to investigate our internet to better improve the lives ansd properties of a generation.</p>
                        <p>In the beginning as a learner it will be difficulft but you need to flow with the process in order to remain focused.</p>
                        <p>How fast you want to go depends on your commitment, dedication and persistent in a world where things happens so fast. Let me remind you of
                            how fast you need to go even in coding.
                        </p>
                        </Col>
                    </Row>
                </Container>
            </section>
     );
}
 
export default Section;