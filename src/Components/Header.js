import { Container, Button } from "react-bootstrap";

const Header = () => {
    return (
        <header>
             <div className="bg-secondary py-5">
            <Container className="py-5">
                    <h2>Maxmel Tech</h2>
                    <h5>What we do reveals your expectation</h5>
                    <Button className="color-btn color-text-sub">Benefits</Button>
                    <Button className="color-btn color-text-sub">Contact Us</Button>
               
            </Container>
            </div>
        </header>
    );
}

export default Header;