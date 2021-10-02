import react from 'react';
import "./styles/footer.css";
import { Row, Col, Card,Accordion,Form,Button } from 'react-bootstrap';
import Tamu from "../images/logo.png"

function Footer () {

    return(
        <Row w-100  className="footer">
            <Col>
               <Accordion>
                   <Accordion.Item eventKey="0">
                   <Accordion.Header> Subscribe</Accordion.Header>
                   <Accordion.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label> Email</Form.Label>
                                <Form.Control type ="Email" placeholder ="Enter your Email"></Form.Control>                                   
                                
                            </Form.Group>
                            <Button type="submit" id ='subscribeBtn'>Subscribe</Button>
                        </Form>
                   </Accordion.Body>
                   </Accordion.Item>
               </Accordion>
               <p>Help </p>
               <p>Copyright 2021 Tamu.com </p>
               <p> Privacy Policy and Terms of Service </p>

            </Col>
            <Col>
                <img alt="Tamu" src={Tamu} style={{ width:"200px", height:"200px" }}/>
            </Col>
            <Col>
                <h6>Footer</h6>
            </Col>

        </Row>
    );
}

export default Footer;