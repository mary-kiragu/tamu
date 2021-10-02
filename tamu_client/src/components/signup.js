import React from 'react';
import { Row,Col, Card,Form,Button } from 'react-bootstrap';
import logo from '../images/logo.png';
import './styles/signup.css';

function signup(){
    return(
        <Row >
            <Col sm md={6} xs >
            <img className="signup-logo" alt="logo" src={logo} />
            
            </Col>
            <Col sm md={4} xs>
                <Card>
                    <Card.Header><h1>Sign Up</h1></Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className ="mb-3" controlId="SignUpEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password "/>


                            </Form.Group>
                            <Button type="submit">Sign Up</Button>

                        </Form>
                    </Card.Body>

                </Card>
            </Col>

        </Row>
    );
}

export default signup;