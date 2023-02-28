import { Container, Button } from "react-bootstrap";
import topPic from '../Assets/target.png';

const Header = () => {
    return (
        <header>
            {/* top content of the page */}
             <div className="showcase-bg py-5">
            <Container className="py-5 my-5">
                    <img  alt="top-icon" src={topPic} className='logo ms-5 mb-3' />
                    <h1 className='color-text'>Max<span className='color-text-sub'>mel</span><span className="text-dark"> Tech</span></h1>
                    <h3 className="text-dark mt-3 mb-5">What we do reveals your expectation</h3>
                    <Button className="color-btn color-text-sub btn-outline-light">Benefits</Button>
                    <Button className="color-btn color-text-sub btn-outline-light ms-3">Contact Us</Button>
               
            </Container>
            </div>
        </header>
    );
}

export default Header;