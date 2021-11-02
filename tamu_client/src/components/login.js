import React from 'react';
import {Row, Col, Card, Form, Button } from 'react-bootstrap';
import logo from '../images/logo.png';
import './styles/login.css';

function Login () {

    return(
        <Row>
            <Col sm md={6} xs style={{  }}>
                <img className="login-logo" alt="logo" src={logo} />
            </Col>
            <Col sm md={4} xs>
                <Card style={{ }}>
                    <Card.Header><h2>Login</h2></Card.Header>
                    <Card.Body>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="keep me logged in?" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label> <Card.Link href="signup" exact>Create account</Card.Link> </Form.Label>
                            </Form.Group>
                           
                            <Button  variant="primary" type="submit">Login</Button>

                        </Form>
                        

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Login;