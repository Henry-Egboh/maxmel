import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import { ChevronDoubleLeft, ChevronDoubleRight } from "react-bootstrap-icons";


const Showcase = ({data}) => {
    const [index, setIndex] = useState(0);

    let arrayAtIndex = data[index];
    let nextClick = index < data.length -1;
    let prevClick = index > 0;

    return (
        <main className="wrapper bg-light py-5 ">
            <Container className="py-5 d-flex justify-content-center">
            <div className="w-xs-100 w-50 d-flex flex-column align-items-center">
                <div className="text-center">
                    <h3 className="color-text-sub">{arrayAtIndex.title}</h3>
                    <p>{arrayAtIndex.description}</p>
                </div>

                <div className="d-flex gap-3">
                    <Button onClick={() => (prevClick ? setIndex(index -1) : null)} disabled={!prevClick} className="color-btn btn-outline-secondary">
                        <ChevronDoubleLeft className="me-2" />
                        Prev
                    </Button>
                    <Button onClick={() => {if(nextClick) return setIndex(index + 1)}} disabled={!nextClick} className="color-btn btn-outline-secondary">
                        Next
                        <ChevronDoubleRight className="ms-2" />
                    </Button>
                </div>
            </div>
            </Container>
        </main>
    );
}

export default Showcase;